import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const model = {
  taskID: {
    type: String,
    required: true,
    unique: true,
  },
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

const dailyTask = new mongoose.Schema(model, { _id: false });
const DailyTask = mongoose.model(
  "DailyTask",
  dailyTask,
  process.env.DAILY_TASKS_COLLECTION
);
export default DailyTask;
