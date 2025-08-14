import { Router } from "express";
import { ReviewController } from "./review.controller";
import { checkSecurePassword } from "../../middleware/checkSecurePassword";

const router = Router();

router.get("/", ReviewController.getAllReview);

router.post(
  "/create-review",
  checkSecurePassword,
  ReviewController.CreateReview
);
router.delete("/:reviewId", checkSecurePassword, ReviewController.deleteReview);

export const ReviewRoutes = router;
