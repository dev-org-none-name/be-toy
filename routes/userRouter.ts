import { Router } from "express";
import { getMeHandler } from "@handlers/users/meHandler";
import {
  getUsersHandler,
  postUsersHandler,
} from "@handlers/users/usersHandler";
import { getUserHandler } from "@handlers/users/userHandler";
import wrapAsyncController from "@libs/middleware";

const router = Router();

router.get("/", wrapAsyncController(getUsersHandler));
router.post("/", wrapAsyncController(postUsersHandler));

router.get("/:id", wrapAsyncController(getUserHandler));

router.get("/me", wrapAsyncController(getMeHandler));

export default router;
