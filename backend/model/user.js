import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 8,
  },
  address: {
    type: String,
    default: "",
    min: 8,
  },
  role: {
    type: String,
    enum: ["User", "Admin"],
    default: "User",
  },
  isVerified: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export const UserModel = mongoose.model("User", userSchema);
