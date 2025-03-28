import { configureStore } from "@reduxjs/toolkit";
import { dailyTasksReducer } from "./slices/dailyTasksSlice";

const store = configureStore({
  reducer: {
    dailyTasks: dailyTasksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
