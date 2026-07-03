import mongoose from "mongoose"
import { env } from "./env.js";

const dbConnect=async()=>{
    if(mongoose.connection.readyState>=1) return
    await mongoose.connect(env.MONGODB_URL);
    console.log("database Connected")
}

export default dbConnect