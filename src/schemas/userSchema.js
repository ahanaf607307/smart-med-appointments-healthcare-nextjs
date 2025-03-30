import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    requied: [true, "Email is required"],
    unique: true,
  },
  displayName: {
    type: String,
    requied: [true, "Name is required"],
  },
  userType: {
    type: String,
    requied: [true, "User type is required"],
    enum: ["general"],
    default: "general",
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
