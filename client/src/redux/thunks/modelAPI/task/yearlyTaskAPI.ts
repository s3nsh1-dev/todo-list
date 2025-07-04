import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {
  UpdateNameType,
  YearlyGoalType,
} from "../../../../constants/commonInterfaces";

interface newType {
  message: string;
  body: YearlyGoalType[];
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const yearlyTaskApi = createApi({
  reducerPath: "YearlyTaskApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/yearly` }),
  tagTypes: ["YearlyTask"],
  endpoints: (builder) => ({
    fetchYearlyTask: builder.query<newType, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["YearlyTask"],
    }),
    addYearlyTask: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/add",
        method: "POST",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["YearlyTask"],
    }),
    deleteYearlyTask: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/delete",
        method: "DELETE",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["YearlyTask"],
    }),
    updateYearlyTaskName: builder.mutation<void, UpdateNameType>({
      query: ({ _id, newName }) => ({
        url: "/update/name",
        method: "PATCH",
        body: {
          _id,
          newName,
        },
      }),
      invalidatesTags: ["YearlyTask"],
    }),
    updateYearlyTaskStatus: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/update/status",
        method: "PATCH",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["YearlyTask"],
    }),
    reorderYearlyTasks: builder.mutation<
      newType,
      { orderedTasks: { _id: string; order: number }[] }
    >({
      query: (payload) => ({
        url: "/reorder",
        method: "PATCH",
        body: payload,
      }),
      async onQueryStarted({ orderedTasks }, { dispatch, queryFulfilled }) {
        // Optimistic update
        const patchResult = dispatch(
          yearlyTaskApi.util.updateQueryData(
            "fetchYearlyTask",
            undefined,
            (draft) => {
              if (!draft?.body) return;
              const orderMap = new Map(
                orderedTasks.map((task) => [task._id, task.order])
              );
              draft.body.forEach((task) => {
                if (orderMap.has(task._id)) {
                  task.order = orderMap.get(task._id)!;
                }
              });
              draft.body.sort((a, b) => a.order - b.order);
            }
          )
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
  }),
});

export default yearlyTaskApi;
export const {
  useFetchYearlyTaskQuery,
  useAddYearlyTaskMutation,
  useDeleteYearlyTaskMutation,
  useUpdateYearlyTaskNameMutation,
  useUpdateYearlyTaskStatusMutation,
  useReorderYearlyTasksMutation,
} = yearlyTaskApi;
