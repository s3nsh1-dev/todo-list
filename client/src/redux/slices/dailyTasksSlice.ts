import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  taskDetailsType,
  historyLogType,
  dailyTasksType,
} from "../../constants/commonInterfaces";

const taskDetails: taskDetailsType[] = [
  { taskId: "0", taskName: "Task A", status: "ONGOING" },
  { taskId: "1", taskName: "Task B", status: "ONGOING" },
  { taskId: "2", taskName: "Task C", status: "DONE" },
  { taskId: "3", taskName: "Task D", status: "ONGOING" },
];
const previousTasksLogs: historyLogType[] = [
  { histId: "0", histDate: "Mon, Mar.24.2025", histResult: "SUCCESS" },
  { histId: "1", histDate: "Tue, Mar.25.2025", histResult: "SUCCESS" },
  { histId: "2", histDate: "Wed, Mar.26.2025", histResult: "FAILED" },
  { histId: "3", histDate: "Thu, Mar.27.2025", histResult: "SUCCESS" },
  { histId: "4", histDate: "Fri, Mar.28.2025", histResult: "FAILED" },
];
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
