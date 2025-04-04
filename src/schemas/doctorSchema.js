import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  hospital: {
    type: String,
    required: [true, "Hospital name is required"],
  },
  id: {
    type: String,
    required: [true, "Doctor id is required"],
  },
  name: {
    type: String,
    required: [true, "Doctor name is required"],
  },
  phone: {
    type: String,
    required: [true, "Doctor phone number is required"],
  },
  specialty: {
    type: String,
    required: [true, "Doctor specialty is required"],
  },
  status: {
    type: String,
    enum: ["active", "inactive", "on-leave"],
    default: "active",
  },
});

const Doctor =
  mongoose.models?.Doctor || mongoose.model("Doctor", doctorSchema);

export default Doctor;
