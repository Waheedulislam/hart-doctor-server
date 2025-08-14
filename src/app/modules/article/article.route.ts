import { Router } from "express";
import { ArticleController } from "./article.controller";
import { checkSecurePassword } from "../../middleware/checkSecurePassword";

const router = Router();

router.get("/", ArticleController.getAllArticle);
router.get("/:articleId", ArticleController.getSingleArticle);
router.post(
  "/create-article",
  checkSecurePassword,
  ArticleController.CreateArticle
);
router.patch(
  "/:articleId",
  checkSecurePassword,
  ArticleController.updateArticle
);
router.delete(
  "/:articleId",
  checkSecurePassword,
  ArticleController.deleteArticle
);

export const ArticleRoutes = router;
