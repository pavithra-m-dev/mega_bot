import mongoose from "mongoose";

const connectToMongoDB = async () => {
  console.log("Mongo URI:", process.env.MONGODB_URI);
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    throw error;
  }
};

export default connectToMongoDB;
