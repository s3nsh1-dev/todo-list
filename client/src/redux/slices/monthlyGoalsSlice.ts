import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { monthlyHistory, monthlyGoalsList } from "../../constants/sliceDataset";
import { monthlyGoalsListType } from "../../constants/commonInterfaces";

const initialState = {
  monthlyHistory,
  monthlyGoalsList,
};

const monthlySlice = createSlice({
  name: "monthlyGoals",
  initialState,
  reducers: {
    addMonthlyGoals: (state, action: PayloadAction<string>) => {
      state.monthlyGoalsList.push({
        id: crypto.randomUUID(),
        GoalName: action.payload,
        status: "ONGOING",
      });
    },
    updateMonthlyGoalStatus: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        monthlyGoalsList: state.monthlyGoalsList.map(
          (goal: monthlyGoalsListType) => {
            const newStatus = goal.status === "DONE" ? "ONGOING" : "DONE";
            return goal.id === action.payload
              ? { ...goal, status: newStatus }
              : goal;
          }
        ),
      };
    },
    removeMonthlyGoal: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        monthlyGoalsList: state.monthlyGoalsList.filter(
          (goal) => goal.id === action.payload
        ),
      };
    },
    editMonthlyGoal: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const goal = state.monthlyGoalsList.find(
        (goal) => goal.id === action.payload.id
      );
      if (goal) {
        goal.GoalName = action.payload.name;
      }
    },
  },
});

export default monthlySlice;

export const {
  addMonthlyGoals,
  removeMonthlyGoal,
  editMonthlyGoal,
  updateMonthlyGoalStatus,
} = monthlySlice.actions;

export const monthlyReducer = monthlySlice.reducer;
