import mongoose from "mongoose";
import { historyLogType } from "../constants/projectTypes";
import env from "../config/env.config";

const model: mongoose.SchemaDefinition<historyLogType> = {
  histId: {
    type: String,
    required: true,
    unique: true,
  },
  histDate: {
    type: String,
    required: true,
  },
  histResult: {
    type: String,
    required: true,
  },
};

const dailyHistory = new mongoose.Schema(model, { _id: false });
const DailyHistory = mongoose.model<historyLogType>(
  "DailyHistory",
  dailyHistory,
  env.DAILY_HISTORY_COLLECTION
);
export default DailyHistory;
