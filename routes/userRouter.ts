import { Router } from "express";
import { getMeHandler } from "@handlers/users/meHandler";
import { getUsersHandler } from "@handlers/users/usersHandler";
import { getUserHandler } from "@handlers/users/userHandler";
import { isAuthenticated } from "@libs/middlewares/isAuthenticated";

const router = Router();

router.get("/", getUsersHandler);

router.get("/me", isAuthenticated, getMeHandler);
router.get("/:id", getUserHandler);

export default router;
