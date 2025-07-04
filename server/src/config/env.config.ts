import dotenv from "dotenv";

dotenv.config();

interface EnvVariables {
  PORT: string;
  DAILY_TASKS_COLLECTION: string;
  DAILY_HISTORY_COLLECTION: string;
  WEEKLY_TASKS_COLLECTION: string;
  WEEKLY_HISTORY_COLLECTION: string;
  MONTHLY_TASKS_COLLECTION: string;
  MONTHLY_HISTORY_COLLECTION: string;
  YEARLY_TASKS_COLLECTION: string;
  YEARLY_HISTORY_COLLECTION: string;
  MONGODB_DATABASE: string;
  MONGODB_CONNECTION_STRING: string;
  MONGODB_ATLAS_STRING: string;
}

const env: EnvVariables = {
  PORT: process.env.PORT || "",
  DAILY_TASKS_COLLECTION: process.env.DAILY_TASKS_COLLECTION || "",
  DAILY_HISTORY_COLLECTION: process.env.DAILY_HISTORY_COLLECTION || "",
  WEEKLY_TASKS_COLLECTION: process.env.WEEKLY_TASKS_COLLECTION || "",
  WEEKLY_HISTORY_COLLECTION: process.env.WEEKLY_HISTORY_COLLECTION || "",
  MONTHLY_TASKS_COLLECTION: process.env.MONTHLY_TASKS_COLLECTION || "",
  MONTHLY_HISTORY_COLLECTION: process.env.MONTHLY_HISTORY_COLLECTION || "",
  YEARLY_TASKS_COLLECTION: process.env.YEARLY_TASKS_COLLECTION || "",
  YEARLY_HISTORY_COLLECTION: process.env.YEARLY_HISTORY_COLLECTION || "",
  MONGODB_DATABASE: process.env.MONGODB_DATABASE || "",
  MONGODB_CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING || "",
  MONGODB_ATLAS_STRING: process.env.MONGODB_ATLAS_STRING || "",
};

export default env;
