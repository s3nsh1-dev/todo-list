import mongoose from "mongoose";
import env from "../config/env.config";
import { weeklyLogsType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<weeklyLogsType> = {
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

const weeklyHistory = new mongoose.Schema(model, { _id: true });
const WeeklyHistory = mongoose.model<weeklyLogsType>(
  "WeeklyHistory",
  weeklyHistory,
  env.WEEKLY_HISTORY_COLLECTION
);
export default WeeklyHistory;
