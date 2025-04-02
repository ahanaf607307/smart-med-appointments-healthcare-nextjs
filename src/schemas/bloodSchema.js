import mongoose from "mongoose";

const bloodSchema = new mongoose.Schema({
  patientName: {
    type: String,
    requied: [true, "Patient name is required"],
  },
  bloodType: {
    type: String,
    requied: [true, "Blood type is required"],
  },
  unitsNeeded: {
    type: Number,
    requied: [true, "Units needed is required"],
    default: 1,
  },
  urgencyLevel: {
    type: String,
    requied: [true, "Urgency level is required"],
  },
  hospital: {
    type: String,
    requied: [true, "Hospital name is required"],
  },
  location: {
    type: String,
    requied: [true, "Location is required"],
  },
  contactName: {
    type: String,
    requied: [true, "Contact name is required"],
  },
  contactPhone: {
    type: String,
    requied: [true, "Contact phone is required"],
  },
  contactEmail: {
    type: String,
    requied: [true, "Contact email is required"],
  },
  additionalInfo: {
    type: String,
    requied: [true, "Additional info is required"],
    default: "N/A",
  },
  consent: {
    type: Boolean,
    requied: [true, "Consent is required"],
    default: false,
  },
  postedAt: {
    type: Number,
    requied: [true, "PostedAt info is required"],
  },
  isDonate: {
    type: Boolean,
    requied: [true, "isDonate info is required"],
    default: false,
  },
});

const Blood = mongoose.models.Blood || mongoose.model("Blood", bloodSchema);
export default Blood;
