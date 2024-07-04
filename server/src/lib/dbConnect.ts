import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://vibhu7838:salted123@cluster0.inyepa9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
      dbName: "wd-compiler",
    });
    console.log("connection established!");
  } catch (error) {
    console.log("error connecting to database");
  }
};
