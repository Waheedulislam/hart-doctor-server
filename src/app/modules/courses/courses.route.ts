import { Router } from "express";
import { CourseController } from "./courses.controller";
import { checkSecurePassword } from "../../middleware/checkSecurePassword";

const router = Router();

router.get("/", CourseController.getAllCourse);
router.get("/:courseId", CourseController.getSingleCourse);
router.post(
  "/create-course",
  checkSecurePassword,
  CourseController.CreateCourse
);

router.patch("/:courseId", checkSecurePassword, CourseController.updateCourse);
router.delete("/:courseId", checkSecurePassword, CourseController.deleteCourse);
export const CourseRoutes = router;
