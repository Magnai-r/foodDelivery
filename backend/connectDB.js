import { config, configDotenv } from "dotenv";
import { connect } from "mongoose";

configDotenv();
const uri = process.env.MONGO_URI;
console.log(uri);
export const connectMongoDB = async () => {
  try {
    await connect(uri);
    console.log("connected to db");
  } catch (error) {
    console.log(error, "err");
  }
};
