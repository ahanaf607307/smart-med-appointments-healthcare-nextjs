import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema({
  patientName: {
    type: String,
    requied: [true, "Patient name is required"],
  },
  bloodGroup: {
    type: String,
    requied: [true, "Blood group is required"],
  },
  unitsNeeded: {
    type: String,
    requied: [true, "Units needed is required"],
  },
  hospital: {
    type: String,
    requied: [true, "Hospital is required"],
  },
  postedDate: {
    type: String,
    requied: [true, "Posted date is required"],
  },
  neededDate: {
    type: String,
    requied: [true, "Needed date name is required"],
  },
  yourName: {
    type: String,
    requied: [true, "Name phone is required"],
  },
  yourPhoneNumber: {
    type: String,
    requied: [true, "Phone number is required"],
  },
});

const Blood = mongoose.models.Blood || mongoose.model("Blood", bloodSchema);
export default Blood;
