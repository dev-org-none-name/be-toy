import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isAnonymous = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.headers.cookie) {
    next();
  } else {
    res.status(401).json({ error: "Auth Error from authChecker" });
  }
};
