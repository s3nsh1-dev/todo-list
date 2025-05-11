import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  monthlyGoalsListType,
  UpdateNameType,
} from "../../../../constants/commonInterfaces";

const monthlyTaskApi = createApi({
  reducerPath: "monthlyTaskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/monthly" }),
  tagTypes: ["MonthlyTask"],
  endpoints: (builder) => ({
    fetchMonthlyTasks: builder.query<monthlyGoalsListType[], void>({
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
  }),
});
export default monthlyTaskApi;
export const {
  useAddMonthlyTaskMutation,
  useFetchMonthlyTasksQuery,
  useDeleteMonthlyTaskMutation,
  useUpdateMonthlyTaskNameMutation,
  useUpdateMonthlyTaskStatusMutation,
} = monthlyTaskApi;
