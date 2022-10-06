import { Request, Response } from "express";

// 로그인 기능 생성후 사용가능
export const getMeHandler = async (req: Request, res: Response) => {
  return res.send("여기는 ME!");
};
