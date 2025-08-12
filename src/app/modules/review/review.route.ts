import { Router } from "express";
import { ReviewController } from "./review.controller";

const router = Router();

router.get("/", ReviewController.getAllReview);

router.post("/create-review", ReviewController.CreateReview);
router.delete("/:reviewId", ReviewController.deleteReview);

export const ReviewRoutes = router;
