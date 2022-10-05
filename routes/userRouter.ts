import { Router } from "express";
import {
  getMeHandler,
  getUserHandler,
  postUserHandler,
} from "../handlers/users/userHandler";

const router = Router();

router.get("/", getUserHandler);
router.post("/", postUserHandler);

router.get("/me", getMeHandler);

export default router;
