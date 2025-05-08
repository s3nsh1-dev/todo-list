import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const model = {};

const monthlyHistory = new mongoose.Schema(model, { _id: false });
const MonthlyHistory = mongoose.model(
  "MonthlyHistory",
  monthlyHistory,
  process.env.MONTHLY_HISTORY_COLLECTION
);
export default MonthlyHistory;
