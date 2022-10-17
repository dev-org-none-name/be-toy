import { Router } from "express";
import { getLoginHandler, postLoginHandler } from "@handlers/auth/loginHandler";
import { isAnonymous } from "@libs/middlewares/isAnonymous";

const router = Router();

router.get("/login", isAnonymous, getLoginHandler);
router.post("/login", isAnonymous, postLoginHandler);

export default router;
