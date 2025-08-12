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
  const { courseId } = req.params;
  const result = await CourseServices.getSingleCourse(courseId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Single courses retrieved successfully",
    data: result,
  });
});

const updateCourse = catchAsync(async (req: Request, res: Response) => {
  const { courseId } = req.params;
  const updatedData = req.body;

  const result = await CourseServices.updateCourse(courseId, updatedData);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Course updated successfully",
    data: result,
  });
});

const deleteCourse = catchAsync(async (req: Request, res: Response) => {
  const { courseId } = req.params;

  await CourseServices.deleteCourse(courseId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: "Course deleted successfully",
    data: {},
  });
});

export const CourseController = {
  CreateCourse,
  getAllCourse,
  getSingleCourse,
  updateCourse,
  deleteCourse,
};
