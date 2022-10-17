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
    res
      .status(401)
      .json({
        error: "비회원만 접속 할 수 있습니다. 로그아웃 후 다시 시도하십시오.",
      });
  }
};
