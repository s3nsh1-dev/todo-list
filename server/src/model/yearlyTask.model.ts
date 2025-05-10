import mongoose from "mongoose";
import { YearlyGoalType } from "../constants/projectTypes";
import env from "../config/env.config";

const model: mongoose.SchemaDefinition<YearlyGoalType> = {
  yearlyGoalName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["ONGOING", "DONE"],
    default: "ONGOING",
  },
};

const yearlyTask = new mongoose.Schema(model, { _id: true });
const YearlyTask = mongoose.model<YearlyGoalType>(
  "YearlyTask",
  yearlyTask,
  env.YEARLY_TASKS_COLLECTION
);
export default YearlyTask;
