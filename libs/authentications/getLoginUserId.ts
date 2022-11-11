import { Request } from "express";
const jwt = require("jsonwebtoken");

export default function getLoginUserId(req: Request) {
  const {
    headers: { cookie },
  } = req;
  const token = cookie.split("token=")[1];
  const userId = jwt.decode(token)["userId"];
  return Number(userId);
}
