import { Router } from "express";
import { getMeHandler } from "@handlers/users/meHandler";

const router = Router();

router.get("/", getMeHandler);

export default router;
