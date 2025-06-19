import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  monthlyHistory,
  monthlyGoalsList,
} from "../../../constants/sliceDataset";
import {
  monthlyGoalsListType,
  monthlyHistoryType,
} from "../../../constants/commonInterfaces";

interface monthlyGoalsState {
  monthlyHistory: monthlyHistoryType[];
  monthlyGoalsList: monthlyGoalsListType[];
}

const initialState: monthlyGoalsState = {
  monthlyHistory,
  monthlyGoalsList,
};

const monthlySlice = createSlice({
  name: "monthlyGoals",
  initialState,
  reducers: {
    addMonthlyGoals: (state, action: PayloadAction<string>) => {
      state.monthlyGoalsList.push({
        _id: crypto.randomUUID(),
        GoalName: action.payload,
        status: "ONGOING",
        order: state.monthlyGoalsList.length, // or use another logic for order
      });
    },
    updateMonthlyGoalStatus: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        monthlyGoalsList: state.monthlyGoalsList.map(
          (goal: monthlyGoalsListType) => {
            const newStatus = goal.status === "DONE" ? "ONGOING" : "DONE";
            return goal._id === action.payload
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
          (goal) => goal._id !== action.payload
        ),
      };
    },
    editMonthlyGoal: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const goal = state.monthlyGoalsList.find(
        (goal) => goal._id === action.payload.id
      );
      if (goal) {
        goal.GoalName = action.payload.name;
      }
    },
    reInitializeMonthlyGoals: (
      state,
      action: PayloadAction<monthlyGoalsListType[]>
    ) => {
      return {
        ...state,
        monthlyGoalsList: action.payload,
      };
    },
  },
});

export default monthlySlice;

export const {
  addMonthlyGoals,
  removeMonthlyGoal,
  editMonthlyGoal,
  updateMonthlyGoalStatus,
  reInitializeMonthlyGoals,
} = monthlySlice.actions;

export const monthlyReducer = monthlySlice.reducer;
