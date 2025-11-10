import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) throw new Error("URI not set in .ev");
    await mongoose.connect(uri);
    console.log("MongoDB connected", mongoose.connection.host);
  } catch (error) {
    console.error("MongoDB Connection failed:", error.message);
  }
};

export default connectDB;
