import mongoose from "mongoose";
import env from "../config/env.config";
import { monthlyHistoryType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<monthlyHistoryType> = {
  MonthlyName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["SUCCESS", "FAILED"],
    required: true,
  },
};

const monthlyHistory = new mongoose.Schema(model, { _id: true });
const MonthlyHistory = mongoose.model<monthlyHistoryType>(
  "MonthlyHistory",
  monthlyHistory,
  env.MONTHLY_HISTORY_COLLECTION
);
export default MonthlyHistory;
