import { Router } from "express";
import { getJobsHandler, postJobsHandler } from "@handlers/jobs/jobsHandler";

const router = Router();

router.get("/", getJobsHandler);
router.post("/", postJobsHandler);

export default router;
