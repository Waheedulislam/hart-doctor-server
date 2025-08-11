import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { StatusCodes } from "http-status-codes";
import { CourseServices } from "./courses.service";

const CreateCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await CourseServices.CreateCourse(req.body);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Courses Created successfully!",
    data: {
      result,
    },
  });
});

const getAllCourse = catchAsync(async (req, res) => {
  const result = await CourseServices.getAllCourses();

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Courses are retrieved successfully",
    data: { result },
  });
});

const getSingleCourse = catchAsync(async (req, res) => {
  const { CourseId } = req.params;
  const result = await CourseServices.getSingleCourse(CourseId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Single courses retrieved successfully",
    data: result,
  });
});

export const CourseController = {
  CreateCourse,
  getAllCourse,
  getSingleCourse,
};
