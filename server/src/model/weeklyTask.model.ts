import mongoose from "mongoose";
import env from "../config/env.config";
import { weeklyGoalsListType } from "../constants/projectTypes";

const model: mongoose.SchemaDefinition<weeklyGoalsListType> = {
  id: {
    type: String,
    required: true,
    unique: true,
  },
  wGoalsName: {
    type: String,
    required: true,
  },
  wGoalsStatus: {
    type: String,
    enum: ["ONGOING", "DONE"],
    required: true,
  },
};

const weeklyTask = new mongoose.Schema(model, { _id: false });
const WeeklyTask = mongoose.model<weeklyGoalsListType>(
  "WeeklyTask",
  weeklyTask,
  env.WEEKLY_TASKS_COLLECTION
);
export default WeeklyTask;
