import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

export const isAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.cookie) {
    const token = req.headers.cookie.replace("token=", "");
    jwt.verify(token, process.env.ACCESS_TOKEN_SERET, (err) => {
      if (err) {
        res.status(401).json({
          statusCode: 401,
          error: "토큰 검증 과정에서 오류가 발생했습니다.",
        });
      } else {
        next();
      }
    });
  } else {
    res
      .status(401)
      .json({ statusCode: 401, error: "로그인이 필요한 페이지 입니다." });
  }
};
