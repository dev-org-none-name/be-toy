import { Router } from "express";
import { getProductHandler } from "@handlers/products/productHandler";

const router = Router();

router.get("/", getProductHandler);

export default router;
