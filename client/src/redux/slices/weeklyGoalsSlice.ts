import { createSlice } from "@reduxjs/toolkit";
import type { weeklyGoalObjectType } from "../../constants/commonInterfaces";
import { weeklyGoalsList, weeklyLogs } from "../../constants/sliceDataset";

const initialState: weeklyGoalObjectType = { weeklyGoalsList, weeklyLogs };

const weeklySlice = createSlice({
  name: "",
  initialState,
  reducers: {},
});
export default weeklySlice;
