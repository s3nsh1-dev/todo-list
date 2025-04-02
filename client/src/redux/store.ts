import { configureStore } from "@reduxjs/toolkit";
import { dailyTasksReducer } from "./slices/dailyTasksSlice";
import { weeklyGoalReducer } from "./slices/weeklyGoalsSlice";
import { monthlyReducer } from "./slices/monthlyGoalsSlice";

const store = configureStore({
  reducer: {
    dailyTasks: dailyTasksReducer,
    weeklyGoals: weeklyGoalReducer,
    monthlyGoals: monthlyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
