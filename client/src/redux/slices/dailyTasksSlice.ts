import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface dailyTasksType {
  taskId: string;
  taskName: string;
}
interface historyLogType {
  histId: string;
  histResult: string;
}
interface initialStateType {
  activeTasks: dailyTasksType[];
  previousTasksLogs: historyLogType[];
}

const activeTasks: dailyTasksType[] = [
  { taskId: "0", taskName: "Task A" },
  { taskId: "1", taskName: "Task B" },
  { taskId: "2", taskName: "Task C" },
  { taskId: "3", taskName: "Task D" },
];
const previousTasksLogs: historyLogType[] = [
  { histId: "0", histResult: "SUCCESS" },
  { histId: "1", histResult: "SUCCESS" },
  { histId: "2", histResult: "FAILED" },
  { histId: "3", histResult: "SUCCESS" },
  { histId: "4", histResult: "FAILED" },
];
const initialState: initialStateType = {
  activeTasks,
  previousTasksLogs,
};

const dailyTasksSlice = createSlice({
  name: "dailyTasks",
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<dailyTasksType>) => {
      state["activeTasks"].push(action.payload);
    },

    // state is update internally because RTK uses immer.js
    removeTasks: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        activeTasks: state["activeTasks"].filter(
          (task) => task.taskId !== action.payload
        ),
      };
    },

    updateTask: (state, action: PayloadAction<dailyTasksType>) => {
      return {
        ...state,
        activeTasks: state["activeTasks"].map((tasks) =>
          tasks.taskId === action.payload.taskId ? action.payload : tasks
        ),
      };
    },
  },
});

export const { addTasks, removeTasks, updateTask } = dailyTasksSlice.actions;
export default dailyTasksSlice;
export const dailyTasksReducer = dailyTasksSlice.reducer;
