import client from "@libs/client";
import { Request, Response } from "express";

export const getUsersHandler = async (req: Request, res: Response) => {
  const result = await client.user.findMany();
  return res.send(result);
};

export const postUsersHandler = async (req: Request, res: Response) => {
  await client.user.create({
    data: {
      userName: "문경민",
      phone: 12345,
      avatar: "기타맨 무사시",
    },
  });
  return res.json({
    ok: true,
  });
};
