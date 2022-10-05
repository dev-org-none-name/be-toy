import { Request, Response } from "express";

export const getMeHandler = async (req: Request, res: Response) => {
  return res.send("여기는 ME!");
};
