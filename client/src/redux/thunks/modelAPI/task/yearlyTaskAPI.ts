import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import {
  UpdateNameType,
  YearlyGoalType,
} from "../../../../constants/commonInterfaces";

const yearlyTaskApi = createApi({
  reducerPath: "YearlyTaskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/yearly" }),
  tagTypes: ["YearlyTask"],
  endpoints: (builder) => ({
    fetchYearlyTask: builder.query<YearlyGoalType[], void>({
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
  }),
});

export default yearlyTaskApi;
export const {
  useFetchYearlyTaskQuery,
  useAddYearlyTaskMutation,
  useDeleteYearlyTaskMutation,
  useUpdateYearlyTaskNameMutation,
  useUpdateYearlyTaskStatusMutation,
} = yearlyTaskApi;
