import mongoose from "mongoose";
import { TReview } from "./review.interface";
import Review from "./review.model";
import AppError from "../../errors/appError";
import { StatusCodes } from "http-status-codes";

// Function to create a review
const CreateReview = async (userData: TReview) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Create the review document
    const Reviews = new Review(userData);
    const createReview = await Reviews.save({ session });

    await session.commitTransaction();
    return createReview;
  } catch (error) {
    if (session.inTransaction()) {
      await session.abortTransaction();
    }
    throw error;
  } finally {
    session.endSession();
  }
};

const getAllReview = async () => {
  const result = await Review.find();
  return result;
};

// Delete article by id
const deleteReview = async (articleId: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedArticle = await Review.findByIdAndDelete(articleId, {
      session,
    });

    if (!deletedArticle) {
      throw new AppError(StatusCodes.NOT_FOUND, "Review not found");
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
export const ReviewServices = {
  CreateReview,
  getAllReview,
  deleteReview,
};
