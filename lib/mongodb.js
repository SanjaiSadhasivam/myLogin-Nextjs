import mongoose from "mongoose";

export const connectMongoDB = async () => {
  const url = process.env.NEXT_PUBLIC_MONGODB;

  try {
    await mongoose.connect(url).then(() => {
      console.log("MongoDB connected");
    });
  } catch (error) {
    console.log("Error in mongodb", error);
  }
};
