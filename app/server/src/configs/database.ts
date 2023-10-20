import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDatabase = async (): Promise<void> => {
  const mongoDBUri = process.env.MONGO_URI || "";

  if (!mongoDBUri) {
    console.error("MongoDB URL not found in .env file");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoDBUri);
    console.log("Connected to MongoDB");

    // mongoose.set("debug", true);
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
};

export default connectToDatabase;
