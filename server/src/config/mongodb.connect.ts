import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const connectMongodb = async () => {
  try {
    const connection = await mongoose.connect(
      process.env.MONGODB_CONNECTION_STRING || "ERROR_STRING"
    );
    console.info("MongoDB connection:", connection);
  } catch (error) {
    console.error(`MongoDB connection Error: ${error}`);
    process.exit(1);
  }
};
export default connectMongodb;
