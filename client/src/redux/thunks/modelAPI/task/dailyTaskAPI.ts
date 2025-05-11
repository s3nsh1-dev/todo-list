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
      void,
      { orderedTasks: { _id: string; order: number }[] }
    >({
      query: (payload) => ({
        url: "/reorder",
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["DailyTask"],
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
