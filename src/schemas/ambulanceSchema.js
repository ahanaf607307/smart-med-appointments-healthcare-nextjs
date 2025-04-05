import mongoose from "mongoose";

const ambulanceSchema = new mongoose.Schema({
  ambulanceName: {
    type: String,
    required: [true, "ambulance name is required"],
  },
  ambulanceImage: {
    type: String,
    required: [true, "ambulance image is required"],
  },
  rentPrice: {
    type: String,
    required: [true, "rent price is required"],
  },
  location: {
    type: String,
    required: [true, "location is required"],
  },
  phoneNumber: {
    type: String,
    required: [true, "phone number is required"],
  },
});

const Ambulance =
  mongoose.models?.ambulance || mongoose.model("ambulance", ambulanceSchema);
export default Ambulance;
