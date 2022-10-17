import { Router } from "express";
import { getLoginHandler, postLoginHandler } from "@handlers/auth/loginHandler";
import {
  getSignupHandler,
  postSignupHandler,
} from "@handlers/auth/signupHandler";
import { isAnonymous } from "@libs/middlewares/isAnonymous";

const router = Router();

router.get("/login", isAnonymous, getLoginHandler);
router.post("/login", isAnonymous, postLoginHandler);

router.get("/signup", isAnonymous, getSignupHandler);
router.post("/signup", isAnonymous, postSignupHandler);

export default router;
