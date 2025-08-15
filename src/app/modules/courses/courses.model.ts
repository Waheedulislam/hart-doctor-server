import mongoose, { Schema } from "mongoose";
import { TCourses } from "./courses.interface";

// Create the Category schema based on the interface
const CourseSchema = new Schema<TCourses>(
  {
    title: {
      type: String,
    },
    duration: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<TCourses>("Course", CourseSchema);
export default Course;
