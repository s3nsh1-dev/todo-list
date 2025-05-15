import mongoose from "mongoose";
import env from "../config/env.config";
import { monthlyGoalsListType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<monthlyGoalsListType> = {
  GoalName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["ONGOING", "DONE"],
    default: "ONGOING",
  },
  order: {
    type: Number,
    required: true,
    default: 0,
  },
};

const monthlyTask = new mongoose.Schema(model, { _id: true });
const MonthlyTask = mongoose.model<monthlyGoalsListType>(
  "MonthlyTask",
  monthlyTask,
  env.MONTHLY_TASKS_COLLECTION
);
export default MonthlyTask;
