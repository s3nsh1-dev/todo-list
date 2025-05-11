import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  taskDetailsType,
  dailyTasksType,
} from "../../../constants/commonInterfaces";
import {
  taskDetails,
  previousTasksLogs,
} from "../../../constants/sliceDataset";

const initialState: dailyTasksType = {
  taskDetails,
  previousTasksLogs,
};

const dailyTasksSlice = createSlice({
  name: "dailyTasks",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<taskDetailsType>) => {
      state["taskDetails"].push(action.payload);
    },

    // state is update internally because RTK uses immer.js
    removeTasks: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        taskDetails: state["taskDetails"].filter(
          (task) => task._id !== action.payload
        ),
      };
    },

    updateTask: (state, action: PayloadAction<taskDetailsType>) => {
      return {
        ...state,
        taskDetails: state["taskDetails"].map((tasks) =>
          tasks._id === action.payload._id ? action.payload : tasks
        ),
      };
    },
    replaceTasksWithNewValue: (
      state,
      action: PayloadAction<taskDetailsType[]>
    ) => {
      return { ...state, taskDetails: action.payload };
    },
  },
});

export const { addTasks, removeTasks, updateTask, replaceTasksWithNewValue } =
  dailyTasksSlice.actions;
export default dailyTasksSlice;
export const dailyTasksReducer = dailyTasksSlice.reducer;
