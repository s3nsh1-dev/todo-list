import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  yearlyHistoryLogs,
  yearlyGoalList,
} from "../../constants/sliceDataset";
import {
  YearlyHistoryLogType,
  YearlyGoalType,
} from "../../constants/commonInterfaces";

interface InitialStateType {
  yearlyGoalList: YearlyGoalType[];
  yearlyHistoryLogs: YearlyHistoryLogType[];
}

const initialState: InitialStateType = {
  yearlyGoalList,
  yearlyHistoryLogs,
};

const yearlySlice = createSlice({
  name: "yearlyGoal",
  initialState,
  reducers: {
    addYearlyGoal: (state, action: PayloadAction<string>) => {
      state.yearlyGoalList.push({
        id: crypto.randomUUID(),
        yearlyGoalName: action.payload,
        status: "ONGOING",
      });
    },

    removeYearlyGoal: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        yearlyGoalList: state.yearlyGoalList.filter((goal) => {
          return goal.id !== action.payload;
        }),
      };
    },

    updateYearlyGoalName: (
      state,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const { id, name } = action.payload;
      const goal = state.yearlyGoalList.find((goal) => goal.id === id);
      if (goal) {
        goal.yearlyGoalName = name;
      }
    },

    updateYearlyGoalStatus: (state, action: PayloadAction<string>) => {
      const goal = state.yearlyGoalList.find(
        (goal) => goal.id === action.payload
      );
      if (goal) {
        goal.status = goal.status === "DONE" ? "ONGOING" : "DONE";
      }
    },
  },
});

export default yearlySlice;
export const {
  addYearlyGoal,
  removeYearlyGoal,
  updateYearlyGoalName,
  updateYearlyGoalStatus,
} = yearlySlice.actions;

export const yearlyGoalReducers = yearlySlice.reducer;
