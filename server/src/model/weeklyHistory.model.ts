import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const model = {};

const weeklyHistory = new mongoose.Schema(model, { _id: false });
const WeeklyHistory = mongoose.model(
  "WeeklyHistory",
  weeklyHistory,
  process.env.WEEKLY_HISTORY_COLLECTION
);
export default WeeklyHistory;
