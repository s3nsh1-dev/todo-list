import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { weeklyGoalObjectType } from "../../constants/commonInterfaces";
import { weeklyGoalsList, weeklyLogs } from "../../constants/sliceDataset";

const initialState: weeklyGoalObjectType = { weeklyGoalsList, weeklyLogs };

const weeklySlice = createSlice({
  name: "",
  initialState,
  reducers: {
    addWeeklyGoals: (state, action: PayloadAction<string>) => {
      state.weeklyGoalsList.push({
        id: crypto.randomUUID(),
        wGoalsName: action.payload,
        wGoalsStatus: "ONGOING",
      });
    },
    // immer will automatically replace this newly returned object to the old one behind the scenes
    // This allows you to write "mutative" code while keeping the state immutable.
    removeWeeklyGoals: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        weeklyGoalsList: state.weeklyGoalsList.filter((task) => {
          return task.id !== action.payload;
        }),
      };
    },
    updateWeeklyGoal: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const { id, name } = action.payload;
      const goal = state.weeklyGoalsList.find((goal) => goal.id === id);
      if (goal) {
        goal.wGoalsName = name;
      }
    },
  },
});

export const { addWeeklyGoals, removeWeeklyGoals } = weeklySlice.actions;
export default weeklySlice;
export const weeklyGoalReducer = weeklySlice.reducer;
