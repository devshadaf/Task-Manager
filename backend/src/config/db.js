import mongoose from "mongoose"

const dbConnect=async()=>{
    if(mongoose.connection.readyState>=1) return
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database Connected")
}

export default dbConnect