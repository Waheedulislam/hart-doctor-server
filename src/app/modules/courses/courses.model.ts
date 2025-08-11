import mongoose, { Schema } from "mongoose";
import { TCourses } from "./courses.interface";

// Create the Category schema based on the interface
const CourseSchema = new Schema<TCourses>(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    countryImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Course = mongoose.model<TCourses>("Courses", CourseSchema);
export default Course;
