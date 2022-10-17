import client from "@libs/client";
import { Request, Response } from "express";

export const getUsersHandler = async (req: Request, res: Response) => {
  const result = await client.user.findMany({
    select: {
      username: true,
      createdAt: true,
    },
  });
  return res.send(result);
};
