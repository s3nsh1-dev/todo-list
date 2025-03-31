import { configureStore } from "@reduxjs/toolkit";
import { dailyTasksReducer } from "./slices/dailyTasksSlice";
import { weeklyGoalReducer } from "./slices/weeklyGoalsSlice";

const store = configureStore({
  reducer: {
    dailyTasks: dailyTasksReducer,
    weeklyGoals: weeklyGoalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
