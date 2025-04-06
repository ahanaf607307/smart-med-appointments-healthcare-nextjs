import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  displayName: {
    type: String,
    required: [true, "Name is required"],
  },
  userType: {
    type: String,
    enum: ["general", "admin", "doctor"],
    default: "general",
  },
});

const User = mongoose.models?.User || mongoose.model("User", userSchema);
export default User;
