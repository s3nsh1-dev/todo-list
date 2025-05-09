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
    required: true,
    default: "ONGOING",
  },
};

const dailyTask = new mongoose.Schema(model, { _id: true });
const DailyTask = mongoose.model<taskDetailsType>(
  "DailyTask",
  dailyTask,
  env.DAILY_TASKS_COLLECTION
);
export default DailyTask;
