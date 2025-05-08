import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const model = {};

const yearlyTask = new mongoose.Schema(model, { _id: false });
const YearlyTask = mongoose.model(
  "YearlyTask",
  yearlyTask,
  process.env.YEARLY_TASKS_COLLECTION
);
export default YearlyTask;
