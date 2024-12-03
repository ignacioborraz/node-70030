import { connect } from "mongoose";

export default async function dbConnect() {
  try {
    connect(process.env.MONGO_LINK);
    console.log("db connected");
  } catch (error) {
    console.log(error);
  }
}
