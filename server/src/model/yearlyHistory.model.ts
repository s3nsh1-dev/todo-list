import mongoose from "mongoose";
import { YearlyHistoryLogType } from "../constants/projectTypes";
import env from "../config/env.config";

const model: mongoose.SchemaDefinition<YearlyHistoryLogType> = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  yearNum: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["SUCCESS", "FAILED"],
    required: true,
  },
};

const yearlyHistory = new mongoose.Schema(model, { _id: false });
const YearlyHistory = mongoose.model<YearlyHistoryLogType>(
  "YearlyHistory",
  yearlyHistory,
  env.YEARLY_HISTORY_COLLECTION
);
export default YearlyHistory;
