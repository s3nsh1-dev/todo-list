import { configureStore } from "@reduxjs/toolkit";
import { dailyTasksReducer } from "./slices/model/dailyTasksSlice";
import { weeklyGoalReducer } from "./slices/model/weeklyGoalsSlice";
import { monthlyReducer } from "./slices/model/monthlyGoalsSlice";
import { yearlyGoalReducers } from "./slices/model/yearlyGoalsSlice";
import { globalButtonReducer } from "./slices/globalButtonFlags";
import { localStorageReducer } from "./slices/localStorageSlice";
import { welcomeReducer } from "./slices/welcomeFlag";
// import { notesSliceReducer } from "./slices/notesSlice";
import dailyTaskApi from "./thunks/modelAPI/task/dailyTaskAPI";
import weeklyTaskApi from "./thunks/modelAPI/task/weeklyTaskAPI";
import monthlyTaskApi from "./thunks/modelAPI/task/monthlyTaskAPI";
import yearlyTaskApi from "./thunks/modelAPI/task/yearlyTaskAPI";

const apiMiddlewares = [
  dailyTaskApi.middleware,
  weeklyTaskApi.middleware,
  monthlyTaskApi.middleware,
  yearlyTaskApi.middleware,
];

const store = configureStore({
  reducer: {
    dailyTasks: dailyTasksReducer,
    weeklyGoals: weeklyGoalReducer,
    monthlyGoals: monthlyReducer,
    yearlyResolution: yearlyGoalReducers,
    buttonFlags: globalButtonReducer,
    notesArray: localStorageReducer,
    welcomeFlag: welcomeReducer,
    // notesArray: notesSliceReducer,
    [dailyTaskApi.reducerPath]: dailyTaskApi.reducer,
    [weeklyTaskApi.reducerPath]: weeklyTaskApi.reducer,
    [monthlyTaskApi.reducerPath]: monthlyTaskApi.reducer,
    [yearlyTaskApi.reducerPath]: yearlyTaskApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...apiMiddlewares),
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware()
  //     .concat(dailyTaskApi.middleware)
  //     .concat(weeklyTaskApi.middleware)
  //     .concat(monthlyTaskApi.middleware)
  //     .concat(yearlyTaskApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
