import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectMongodb = async () => {
  try {
    const connection = await mongoose.connect(
      // process.env.MONGODB_CONNECTION_STRING || "ERROR_STRING"
      process.env.MONGODB_ATLAS_STRING || "ERROR_STRING"
    );
    console.log("running:", process.env.MONGODB_ATLAS_STRING);
  } catch (error) {
    console.error(`MongoDB connection Error: ${error}`);
    process.exit(1);
  }
};
export default connectMongodb;
