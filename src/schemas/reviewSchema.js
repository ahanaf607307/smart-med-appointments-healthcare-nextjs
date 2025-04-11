import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  displayName: {
    type: String,
    required: [true, "Name is required"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  rating: {
    type: Number,
    type: Number,
    min: 1,
    max: 5,
    default: 1,
  },
});

const Review =
  mongoose.models?.Review || mongoose.model("Review", reviewSchema);
export default Review;
