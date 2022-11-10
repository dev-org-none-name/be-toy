import { Router } from "express";
import { getJobsHandler, postJobsHandler } from "@handlers/jobs/jobsHandler";
import {
  getBookmarkHandler,
  postBookmarkHandler,
} from "@handlers/jobs/bookmarkHandler";
import { getJobHandler } from "@handlers/jobs/jobHandler";

const router = Router();

router.get("/", getJobsHandler);
router.post("/", postJobsHandler);
router.get("/:id", getJobHandler);
router.get("/:id/bookmark", getBookmarkHandler);
router.post("/:id/bookmark", postBookmarkHandler);

export default router;
