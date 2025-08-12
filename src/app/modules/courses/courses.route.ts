import { Router } from "express";
import { CourseController } from "./courses.controller";

const router = Router();

router.get("/", CourseController.getAllCourse);
router.get("/:courseId", CourseController.getSingleCourse);
router.post("/create-course", CourseController.CreateCourse);

router.patch("/:courseId", CourseController.updateCourse);
router.delete("/:courseId", CourseController.deleteCourse);
export const CourseRoutes = router;
