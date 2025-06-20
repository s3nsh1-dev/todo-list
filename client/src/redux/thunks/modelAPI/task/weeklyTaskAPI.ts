import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  weeklyGoalsListType,
  UpdateNameType,
} from "../../../../constants/commonInterfaces";

interface newType {
  message: string;
  body: weeklyGoalsListType[];
}

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const weeklyTaskApi = createApi({
  reducerPath: "WeeklyTaskApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${BASE_URL}/api/weekly` }),
  tagTypes: ["WeeklyTask"],
  endpoints: (builder) => ({
    fetchWeeklyTasks: builder.query<newType, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["WeeklyTask"],
    }),
    addWeeklyTask: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/add",
        method: "POST",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["WeeklyTask"],
    }),
    deleteWeeklyTask: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/delete",
        method: "DELETE",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["WeeklyTask"],
    }),
    updateWeeklyTaskName: builder.mutation<void, UpdateNameType>({
      query: ({ _id, newName }) => ({
        url: "/update/name",
        method: "PATCH",
        body: {
          _id,
          newName,
        },
      }),
      invalidatesTags: ["WeeklyTask"],
    }),
    updateWeeklyTaskStatus: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/update/status",
        method: "PATCH",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["WeeklyTask"],
    }),

    reorderWeeklyTasks: builder.mutation<
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
          weeklyTaskApi.util.updateQueryData(
            "fetchWeeklyTasks",
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

export default weeklyTaskApi;
export const {
  useFetchWeeklyTasksQuery,
  useAddWeeklyTaskMutation,
  useDeleteWeeklyTaskMutation,
  useUpdateWeeklyTaskNameMutation,
  useUpdateWeeklyTaskStatusMutation,
  useReorderWeeklyTasksMutation,
} = weeklyTaskApi;
