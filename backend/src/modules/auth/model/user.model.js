import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    minLength: [50, `Name cannot exceed 50 characters`],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
    trim: true,
    lowercase: true,
    match: [
      /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
      "Please Provide a valid Email address",
    ],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    trim: true,
    minLength: [8, `Password must be minimum 8 characters`],
    select:false
  },
},{
    versionKey:false,
    timestamps:true
});

const User=mongoose.models.User || mongoose.model("User",userSchema)

export default User