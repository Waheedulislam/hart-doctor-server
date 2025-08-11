import { Router } from "express";

import { CategoryRoutes } from "../modules/category/category.routes";

import { ArticleRoutes } from "../modules/article/article.route";
import { CourseRoutes } from "../modules/courses/courses.route";
import { ReviewRoutes } from "../modules/review/review.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/category",
    route: CategoryRoutes,
  },
  {
    path: "/course",
    route: CourseRoutes,
  },
  {
    path: "/Review",
    route: ReviewRoutes,
  },
  {
    path: "/article",
    route: ArticleRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
