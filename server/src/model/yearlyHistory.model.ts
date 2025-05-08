import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const model = {};

const yearlyHistory = new mongoose.Schema(model, { _id: false });
const YearlyHistory = mongoose.model(
  "YearlyHistory",
  yearlyHistory,
  process.env.YEARLY_HISTORY_COLLECTION
);
export default YearlyHistory;
