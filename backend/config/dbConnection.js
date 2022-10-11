import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const connectionParams = {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
    dbname: "sportsboard_db",
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
  };
  let db;
  try {
    db = await mongoose.connect(process.env.MONGODB_URI, connectionParams);
    console.log(`Connected to MongoDB!`);
  } catch (err) {
    console.log(err);
  }
  return db;
};

export default connectDB;
