import { createSlice } from "@reduxjs/toolkit";

function getWelcomeFlag() {
  try {
    const welcomeFlag = localStorage.getItem("welcomeFlag");
    if (welcomeFlag) {
      return welcomeFlag;
    } else {
      localStorage.setItem("welcomeFlag", "true");
      return "true";
    }
  } catch (error) {
    console.error("Error getting welcomeFlag from localStorage", error);
    return "true"; // Default value if there's an error
  }
}

const initialState = JSON.parse(getWelcomeFlag());

const welcomeFlagSlice = createSlice({
  name: "welcomeFlag",
  initialState,
  reducers: {
    resetShowWelcome: () => {
      return true;
    },
    setShowWelcomeFalse: () => {
      return false;
    },
    setShowWelcomeTrue: () => {
      return true;
    },
    toggleShowWelcome: (state) => {
      return !state;
    },
  },
});

export default welcomeFlagSlice;
export const {
  toggleShowWelcome,
  resetShowWelcome,
  setShowWelcomeFalse,
  setShowWelcomeTrue,
} = welcomeFlagSlice.actions;
export const welcomeReducer = welcomeFlagSlice.reducer;

// This slice manages the state of the welcome message in the application.
// It contains an initial state with a boolean flag `showWelcome` set to true.
// The slice provides a reducer and an action creator `setShowWelcome` to update the state.
