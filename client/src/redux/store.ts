import { configureStore } from "@reduxjs/toolkit";
import { dailyTasksReducer } from "./slices/dailyTasksSlice";
import { weeklyGoalReducer } from "./slices/weeklyGoalsSlice";
import { monthlyReducer } from "./slices/monthlyGoalsSlice";
import { yearlyGoalReducers } from "./slices/yearlyGoalsSlice";
import { globalButtonReducer } from "./slices/globalButtonFlags";

const store = configureStore({
  reducer: {
    dailyTasks: dailyTasksReducer,
    weeklyGoals: weeklyGoalReducer,
    monthlyGoals: monthlyReducer,
    yearlyResolution: yearlyGoalReducers,
    buttonFlags: globalButtonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
