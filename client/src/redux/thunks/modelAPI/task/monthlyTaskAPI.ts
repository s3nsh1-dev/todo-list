import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  monthlyGoalsListType,
  UpdateNameType,
} from "../../../../constants/commonInterfaces";

interface newType {
  message: string;
  body: monthlyGoalsListType[];
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const monthlyTaskApi = createApi({
  reducerPath: "monthlyTaskApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/monthly`,
  }),
  tagTypes: ["MonthlyTask"],
  endpoints: (builder) => ({
    fetchMonthlyTasks: builder.query<newType, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["MonthlyTask"],
    }),
    addMonthlyTask: builder.mutation<void, string>({
      query: (GoalName) => ({
        url: "/add",
        method: "POST",
        body: { GoalName },
      }),
      invalidatesTags: ["MonthlyTask"],
    }),
    deleteMonthlyTask: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/delete",
        method: "DELETE",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["MonthlyTask"],
    }),
    updateMonthlyTaskName: builder.mutation<void, UpdateNameType>({
      query: ({ _id, newName }) => ({
        url: "/update/name",
        method: "PATCH",
        body: {
          _id,
          newName,
        },
      }),
      invalidatesTags: ["MonthlyTask"],
    }),
    updateMonthlyTaskStatus: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/update/status",
        method: "PATCH",
        body: { _id },
      }),
      invalidatesTags: ["MonthlyTask"],
    }),
    reorderMonthlyTasks: builder.mutation<
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
          monthlyTaskApi.util.updateQueryData(
            "fetchMonthlyTasks",
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
export default monthlyTaskApi;
export const {
  useAddMonthlyTaskMutation,
  useFetchMonthlyTasksQuery,
  useDeleteMonthlyTaskMutation,
  useUpdateMonthlyTaskNameMutation,
  useUpdateMonthlyTaskStatusMutation,
  useReorderMonthlyTasksMutation,
} = monthlyTaskApi;
