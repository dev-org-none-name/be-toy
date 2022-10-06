import { Router } from "express";
import {
  getProductsHandler,
  postProductsHandler,
} from "@handlers/products/productHandler";
import wrapAsyncController from "@libs/middleware";

const router = Router();

router.get("/", getProductsHandler);
router.post("/", wrapAsyncController(postProductsHandler));

export default router;
