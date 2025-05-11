import mongoose from "mongoose";
import { taskDetailsType } from "../constants/projectTypes";
import env from "../config/env.config";

const model: mongoose.SchemaDefinition<taskDetailsType> = {
  taskName: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["DONE", "ONGOING"],
    default: "ONGOING",
  },
  order: {
    type: Number,
    unique: true,
    default: Math.floor(Math.random() * 100),
  },
};

const dailyTask = new mongoose.Schema(model, { _id: true });
const DailyTask = mongoose.model<taskDetailsType>(
  "DailyTask",
  dailyTask,
  env.DAILY_TASKS_COLLECTION
);
export default DailyTask;
