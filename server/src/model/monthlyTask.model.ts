import mongoose from "mongoose";
import env from "../config/env.config";
import { monthlyGoalsListType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<monthlyGoalsListType> = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  GoalName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["ONGOING", "DONE"],
  },
};

const monthlyTask = new mongoose.Schema(model, { _id: false });
const MonthlyTask = mongoose.model<monthlyGoalsListType>(
  "MonthlyTask",
  monthlyTask,
  env.MONTHLY_TASKS_COLLECTION
);
export default MonthlyTask;
