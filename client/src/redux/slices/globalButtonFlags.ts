import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface flagTypes {
  edit: boolean;
  remove: boolean;
  completedToOngoing: boolean;
}
export interface initialStateType {
  dailyFlags: flagTypes;
  weeklyFlags: flagTypes;
  monthlyFlags: flagTypes;
  yearlyFlags: flagTypes;
}

const dailyFlags: flagTypes = {
  edit: false,
  remove: false,
  completedToOngoing: false,
};
const weeklyFlags: flagTypes = {
  edit: false,
  remove: false,
  completedToOngoing: false,
};
const monthlyFlags: flagTypes = {
  edit: false,
  remove: false,
  completedToOngoing: false,
};
const yearlyFlags: flagTypes = {
  edit: false,
  remove: false,
  completedToOngoing: false,
};

const initialState: initialStateType = {
  dailyFlags,
  weeklyFlags,
  monthlyFlags,
  yearlyFlags,
};

const globalButtonFlags = createSlice({
  name: "buttonFlags",
  initialState,
  reducers: {
    updateDailyButtonFlags: (
      state,
      action: PayloadAction<{ name: string; flag: boolean }>
    ) => {
      return {
        ...state,
        dailyFlags: {
          ...state.dailyFlags,
          [action.payload.name]: action.payload.flag,
        },
      };
    },
    updateMonthlyButtonFlags: (
      state,
      action: PayloadAction<{ name: string; flag: boolean }>
    ) => {
      return {
        ...state,
        monthlyFlags: {
          ...state.monthlyFlags,
          [action.payload.name]: action.payload.flag,
        },
      };
    },
    updateWeeklyButtonFlag: (
      state,
      action: PayloadAction<{ name: string; flag: boolean }>
    ) => {
      return {
        ...state,
        weeklyFlags: {
          ...state.weeklyFlags,
          [action.payload.name]: action.payload.flag,
        },
      };
    },
    // if we won't do keyof flagTypes TS is resisting to acknowledge that action.payload.name will have "edit", "remove", or "completedToOngoing".. for TS it will be any and we have specify its string type to tell the incoming format
    updateYearlyButtonFlag: (
      state,
      action: PayloadAction<{ name: keyof flagTypes; flag: boolean }>
    ) => {
      state.yearlyFlags[action.payload.name] = action.payload.flag;
    },
  },
});

export default globalButtonFlags;
export const globalButtonReducer = globalButtonFlags.reducer;
export const {
  updateDailyButtonFlags,
  updateWeeklyButtonFlag,
  updateMonthlyButtonFlags,
  updateYearlyButtonFlag,
} = globalButtonFlags.actions;
