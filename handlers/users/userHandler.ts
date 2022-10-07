import client from "@libs/client";
import { Request, Response } from "express";

export const getUserHandler = async (req: Request, res: Response) => {
  const { id: username } = req.params;
  const result = await client.user.findUnique({
    where: {
      username,
    },
  });
  return res.send(result);
};
