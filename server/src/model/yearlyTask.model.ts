import mongoose from "mongoose";
import { YearlyGoalType } from "../constants/projectTypes";
import env from "../config/env.config";

const model: mongoose.SchemaDefinition<YearlyGoalType> = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  yearlyGoalName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["ONGOING", "DONE"],
    required: true,
  },
};

const yearlyTask = new mongoose.Schema(model, { _id: false });
const YearlyTask = mongoose.model<YearlyGoalType>(
  "YearlyTask",
  yearlyTask,
  env.YEARLY_TASKS_COLLECTION
);
export default YearlyTask;
