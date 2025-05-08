import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const model = {
  histId: {
    type: String,
    required: true,
    unique: true,
  },
  histDate: {
    type: String,
    required: String,
  },
  histResult: {
    type: String,
    required: true,
  },
};

const dailyHistory = new mongoose.Schema(model, { _id: false });
const DailyHistory = mongoose.model(
  "DailyHistory",
  dailyHistory,
  process.env.DAILY_HISTORY_COLLECTION
);
export default DailyHistory;
