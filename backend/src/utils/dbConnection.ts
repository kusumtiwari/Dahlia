import mongoose from "mongoose";
const myUrl = "mongodb+srv://kusumtiwari024:cpJaLUqARaWmRWvN@cluster0.bin0vyl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const dbConnection = async () => {
  try {
    await mongoose.connect(myUrl);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default dbConnection;