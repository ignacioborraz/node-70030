import { config } from "dotenv";
import args from "./args.util.js";

const { mode } = args;
const path = "./.env." + mode;
//console.log(path);
config({ path });

export default {
  MONGO_URI: process.env.MONGO_URI,
  GOOGLE_ID: process.env.GOOGLE_ID,
  PORT: process.env.PORT,
};
