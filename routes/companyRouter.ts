import { Router } from "express";
import { getCompanyHandler } from "@handlers/companies/companyHandler";
import {
  getCompaniesHandler,
  postCompaniesHandler,
} from "@handlers/companies/companiesHandler";
import { isAuthenticated } from "@libs/middlewares/isAuthenticated";

const router = Router();

router.get("/", getCompaniesHandler);
router.post("/", postCompaniesHandler); // isAuthenticated 테스트 후 추가
router.get("/:id", getCompanyHandler);

export default router;
