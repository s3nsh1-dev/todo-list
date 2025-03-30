import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  taskDetailsType,
  dailyTasksType,
} from "../../constants/commonInterfaces";
import { taskDetails, previousTasksLogs } from "../../constants/sliceDataset";

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
      console.log("the newly added task", action.payload);
    },

    // state is update internally because RTK uses immer.js
    removeTasks: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        taskDetails: state["taskDetails"].filter(
          (task) => task.taskId !== action.payload
        ),
      };
    },

    updateTask: (state, action: PayloadAction<taskDetailsType>) => {
      return {
        ...state,
        taskDetails: state["taskDetails"].map((tasks) =>
          tasks.taskId === action.payload.taskId ? action.payload : tasks
        ),
      };
    },
  },
});

export const { addTasks, removeTasks, updateTask } = dailyTasksSlice.actions;
export default dailyTasksSlice;
export const dailyTasksReducer = dailyTasksSlice.reducer;
