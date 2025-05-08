import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const model = {};

const monthlyTask = new mongoose.Schema(model, { _id: false });
const MonthlyTask = mongoose.model(
  "MonthlyTask",
  monthlyTask,
  process.env.MONTHLY_TASKS_COLLECTION
);
export default MonthlyTask;
