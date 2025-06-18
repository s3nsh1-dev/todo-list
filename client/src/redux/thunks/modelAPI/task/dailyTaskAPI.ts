import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  taskDetailsType,
  UpdateNameType,
} from "../../../../constants/commonInterfaces";

interface newType {
  message: string;
  body: taskDetailsType[];
}

const dailyTaskApi = createApi({
  reducerPath: "dailyTaskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/daily" }),
  tagTypes: ["DailyTask"],
  endpoints: (builder) => ({
    fetchDailyTasks: builder.query<newType, void>({
      query: () => ({
        url: "/",
        method: "GET",
      }),
      providesTags: ["DailyTask"],
    }),
    deleteDailyTask: builder.mutation<void, string>({
      query: (_id: string) => ({
        url: "/delete",
        method: "DELETE",
        body: { _id },
      }),
      invalidatesTags: ["DailyTask"],
    }),
    addDailyTask: builder.mutation<void, string>({
      query: (taskName) => ({
        url: "/add",
        method: "POST",
        body: { taskName },
      }),
      invalidatesTags: ["DailyTask"],
    }),
    updateDailyTaskName: builder.mutation<void, UpdateNameType>({
      query: ({ _id, newName }) => ({
        url: "/update/name",
        method: "PATCH",
        body: {
          _id,
          newName,
        },
      }),
      invalidatesTags: ["DailyTask"],
    }),
    updateDailyTaskStatus: builder.mutation<void, string>({
      query: (_id) => ({
        url: "/update/status",
        method: "PATCH",
        body: {
          _id,
        },
      }),
      invalidatesTags: ["DailyTask"],
    }),
    reorderDailyTasks: builder.mutation<
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
        // { dispatch, queryFulfilled } is ......
        // is this retriggering fetchDailyTasks ?
        // show me a sample of draft and its timeline
        const patchResult = dispatch(
          dailyTaskApi.util.updateQueryData(
            "fetchDailyTasks",
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
export default dailyTaskApi;
export const {
  useAddDailyTaskMutation,
  useDeleteDailyTaskMutation,
  useFetchDailyTasksQuery,
  useUpdateDailyTaskNameMutation,
  useUpdateDailyTaskStatusMutation,
  useReorderDailyTasksMutation,
} = dailyTaskApi;
