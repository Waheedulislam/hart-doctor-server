import { Router } from "express";

import { ArticleRoutes } from "../modules/article/article.route";
import { CourseRoutes } from "../modules/courses/courses.route";
import { ReviewRoutes } from "../modules/review/review.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/course",
    route: CourseRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/article",
    route: ArticleRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
