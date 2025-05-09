import mongoose from "mongoose";
import env from "../config/env.config";
import { weeklyLogsType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<weeklyLogsType> = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  weekNum: {
    type: String,
    required: true,
  },
  wResult: {
    type: String,
    enum: ["SUCCESS", "FAILED"],
    required: true,
  },
};

const weeklyHistory = new mongoose.Schema(model, { _id: false });
const WeeklyHistory = mongoose.model<weeklyLogsType>(
  "WeeklyHistory",
  weeklyHistory,
  env.WEEKLY_HISTORY_COLLECTION
);
export default WeeklyHistory;
