import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  taskDetailsType,
  historyLogType,
  dailyTasksType,
} from "../../constants/commonInterfaces";

const taskDetails: taskDetailsType[] = [
  { taskId: "0", taskName: "Complete project report", status: "ONGOING" },
  { taskId: "1", taskName: "Review pull requests", status: "ONGOING" },
  { taskId: "2", taskName: "Fix UI bugs in dashboard", status: "DONE" },
  { taskId: "3", taskName: "Plan team meeting agenda", status: "ONGOING" },
  { taskId: "4", taskName: "Write documentation for API", status: "DONE" },
  { taskId: "5", taskName: "Respond to client emails", status: "ONGOING" },
  {
    taskId: "6",
    taskName: "Refactor authentication module",
    status: "ONGOING",
  },
  { taskId: "7", taskName: "Test new feature deployment", status: "DONE" },
  {
    taskId: "8",
    taskName: "Update dependencies in package.json",
    status: "ONGOING",
  },
  { taskId: "9", taskName: "Optimize database queries", status: "DONE" },
  {
    taskId: "10",
    taskName: "Prepare slides for presentation",
    status: "ONGOING",
  },
  { taskId: "11", taskName: "Fix login validation issue", status: "ONGOING" },
  { taskId: "12", taskName: "Conduct code review for intern", status: "DONE" },
  { taskId: "13", taskName: "Schedule one-on-one meetings", status: "ONGOING" },
  {
    taskId: "14",
    taskName: "Draft blog post on React performance",
    status: "DONE",
  },
];
const previousTasksLogs: historyLogType[] = [
  { histId: "0", histDate: "Mon, Mar.24.2025", histResult: "SUCCESS" },
  { histId: "1", histDate: "Tue, Mar.25.2025", histResult: "SUCCESS" },
  { histId: "2", histDate: "Wed, Mar.26.2025", histResult: "FAILED" },
  { histId: "3", histDate: "Thu, Mar.27.2025", histResult: "SUCCESS" },
  { histId: "4", histDate: "Fri, Mar.28.2025", histResult: "FAILED" },
  { histId: "5", histDate: "Sat, Mar.29.2025", histResult: "SUCCESS" },
  { histId: "6", histDate: "Sun, Mar.30.2025", histResult: "FAILED" },
  { histId: "7", histDate: "Mon, Mar.31.2025", histResult: "SUCCESS" },
  { histId: "8", histDate: "Tue, Apr.01.2025", histResult: "FAILED" },
  { histId: "9", histDate: "Wed, Apr.02.2025", histResult: "SUCCESS" },
  { histId: "10", histDate: "Thu, Apr.03.2025", histResult: "FAILED" },
  { histId: "11", histDate: "Fri, Apr.04.2025", histResult: "SUCCESS" },
  { histId: "12", histDate: "Sat, Apr.05.2025", histResult: "SUCCESS" },
  { histId: "13", histDate: "Sun, Apr.06.2025", histResult: "FAILED" },
  { histId: "14", histDate: "Mon, Apr.07.2025", histResult: "SUCCESS" },
  { histId: "15", histDate: "Tue, Apr.08.2025", histResult: "SUCCESS" },
  { histId: "16", histDate: "Wed, Apr.09.2025", histResult: "FAILED" },
  { histId: "17", histDate: "Thu, Apr.10.2025", histResult: "SUCCESS" },
  { histId: "18", histDate: "Fri, Apr.11.2025", histResult: "FAILED" },
  { histId: "19", histDate: "Sat, Apr.12.2025", histResult: "SUCCESS" },
  { histId: "20", histDate: "Sun, Apr.13.2025", histResult: "FAILED" },
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

    updateTaskName: (state, action: PayloadAction<taskDetailsType>) => {
      return {
        ...state,
        taskDetails: state["taskDetails"].map((tasks) =>
          tasks.taskId === action.payload.taskId ? action.payload : tasks
        ),
      };
    },
    updateTaskStatus: (state, action: PayloadAction<taskDetailsType>) => {
      return {
        ...state,
        taskDetails: state["taskDetails"].map((tasks) =>
          tasks.taskId === action.payload.taskId ? action.payload : tasks
        ),
      };
    },
  },
});

export const { addTasks, removeTasks, updateTaskName } =
  dailyTasksSlice.actions;
export default dailyTasksSlice;
export const dailyTasksReducer = dailyTasksSlice.reducer;
