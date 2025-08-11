import { Router } from "express";
import { CourseController } from "./courses.controller";

const router = Router();

router.get("/", CourseController.getAllCourse);
router.get("/:courseId", CourseController.getSingleCourse);
router.post("/create-course", CourseController.CreateCourse);

export const CourseRoutes = router;
