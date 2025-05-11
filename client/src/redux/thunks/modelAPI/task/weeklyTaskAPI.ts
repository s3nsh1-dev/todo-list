import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  weeklyGoalsListType,
  UpdateNameType,
} from "../../../../constants/commonInterfaces";

const weeklyTaskApi = createApi({
  reducerPath: "WeeklyTaskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/weekly" }),
  tagTypes: ["WeeklyTask"],
  endpoints: (builder) => ({
    fetchWeeklyTasks: builder.query<weeklyGoalsListType[], void>({
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
  }),
});

export default weeklyTaskApi;
export const {
  useFetchWeeklyTasksQuery,
  useAddWeeklyTaskMutation,
  useDeleteWeeklyTaskMutation,
  useUpdateWeeklyTaskNameMutation,
  useUpdateWeeklyTaskStatusMutation,
} = weeklyTaskApi;
