import mongoose, { Schema } from "mongoose";
import { TReview } from "./review.interface";

const ReviewSchema = new Schema<TReview>(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    role: {
      type: String,
      required: [true, "Role is required"],
    },
    avatar: {
      type: String,
      required: [true, "Avatar URL is required"],
    },
    description: {
      type: String,
      required: [true, "description text is required"],
    },
    rating: {
      type: Number,
      required: [true, "Rating  is required"],
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model<TReview>("Reviewsss", ReviewSchema);
export default Review;
