import client from "@libs/client";
import { Request, Response } from "express";

// 여기는 사실상 없는 페이지 그냥 설명하기 편하기 위해 만든 url
export const getUsersHandler = async (req: Request, res: Response) => {
  const result = await client.user.findMany({
    select: {
      role: true,
      username: true,
      email: true,
      phone: true,
    },
  });
  return res.send(result);
};
