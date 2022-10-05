import client from "@libs/client";
import { Request, Response } from "express";

export const getProductHandler = async (req: Request, res: Response) => {
  return res.send("여기는 Products!");
};
