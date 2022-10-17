import { Router } from "express";
import {
  getProductsHandler,
  postProductsHandler,
} from "@handlers/products/productHandler";

const router = Router();

router.get("/", getProductsHandler);
router.post("/", postProductsHandler);

export default router;
