import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const model = {};

const weeklyTask = new mongoose.Schema(model, { _id: false });
const WeeklyTask = mongoose.model(
  "WeeklyTask",
  weeklyTask,
  process.env.WEEKLY_TASKS_COLLECTION
);
export default WeeklyTask;
