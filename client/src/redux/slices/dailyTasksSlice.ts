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
