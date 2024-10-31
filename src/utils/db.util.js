import { connect } from "mongoose";
import env from "./env.util.js"

async function dbConnect() {
    try {
        await connect(env.MONGO_URI)
        console.log("database connected to PID: "+process.pid);        
    } catch (error) {
        console.log(error);
    }
}

export default dbConnect