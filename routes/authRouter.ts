import { Router } from "express";
import { getLoginHandler, postLoginHandler } from "@handlers/auth/loginHandler";
import wrapAsyncController from "@libs/middleware";

const router = Router();

router.get("/login", wrapAsyncController(getLoginHandler));
router.post("/login", postLoginHandler);

export default router;
