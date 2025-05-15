import mongoose from "mongoose";
import env from "../config/env.config";
import { weeklyGoalsListType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<weeklyGoalsListType> = {
  wGoalsName: {
    type: String,
    required: true,
  },
  wGoalsStatus: {
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

const weeklyTask = new mongoose.Schema(model, { _id: true });
const WeeklyTask = mongoose.model<weeklyGoalsListType>(
  "WeeklyTask",
  weeklyTask,
  env.WEEKLY_TASKS_COLLECTION
);
export default WeeklyTask;
