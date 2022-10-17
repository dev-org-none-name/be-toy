import client from "@libs/client";
import { Request, Response } from "express";

export const getSignupHandler = async (req: Request, res: Response) => {
  return res.send("회원가입 페이지");
};

export const postSignupHandler = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  await client.user.create({
    data: { ...data },
  });
  return res.json({
    ok: true,
  });
};
