import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "category is required"],
  },
  degree: {
    type: String,
    required: [true, "Hospital name is required"],
  },
  gender: {
    type: String,
    required: [true, "gender id is required"],
    enum: ["all", "Male", "Female"],
  },
  hospital: {
    type: String,
    required: [true, "hospital name is required"],
  },
  imageLink: {
    type: String,
    required: [true, "imageLink phone number is required"],
  },
  location: {
    type: String,
    required: [true, "location specialty is required"],
  },
  name: {
    type: String,
    required: [true, "location specialty is required"],
  },
});

const Doctor =
  mongoose.models?.Doctor || mongoose.model("Doctor", doctorSchema);

export default Doctor;
