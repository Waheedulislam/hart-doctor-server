import mongoose from "mongoose";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";
import { TCourses } from "./courses.interface";
import Course from "./courses.model";

// Function to create a Courses
const CreateCourse = async (userData: TCourses) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Create the Course document
    const Courses = new Course(userData);
    const createdCourses = await Courses.save({ session });

    await session.commitTransaction();
    return createdCourses;
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    session.endSession();
  }
};

const getAllCourses = async () => {
  const result = await Course.find();
  return result;
};
const getSingleCourse = async (productId: string) => {
  const Courses = await Course.findById(productId);

  if (!Courses) {
    throw new AppError(StatusCodes.NOT_FOUND, "Course not found");
  }
  return Courses;
};

// Update article by id
const updateCourse = async (
  articleId: string,
  updateData: Partial<TCourses>
) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const updatedArticle = await Course.findByIdAndUpdate(
      articleId,
      updateData,
      {
        new: true,
        runValidators: true,
        session,
      }
    );

    if (!updatedArticle) {
      throw new AppError(StatusCodes.NOT_FOUND, "Article not found");
    }

    await session.commitTransaction();
    return updatedArticle;
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    session.endSession();
  }
};

// Delete article by id
const deleteCourse = async (articleId: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedArticle = await Course.findByIdAndDelete(articleId, {
      session,
    });

    if (!deletedArticle) {
      throw new AppError(StatusCodes.NOT_FOUND, "Article not found");
    }

    await session.commitTransaction();
    return deletedArticle;
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    session.endSession();
  }
};

export const CourseServices = {
  CreateCourse,
  getAllCourses,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
