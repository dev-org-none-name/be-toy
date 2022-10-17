import client from "@libs/client";
import { Request, Response } from "express";

export const getUserHandler = async (req: Request, res: Response) => {
  const { id: username } = req.params;
  const result = await client.user.findUnique({
    where: {
      username,
    },
    select: {
      username: true,
      createdAt: true,
      product: true,
    },
  });

  if (result == null)
    return res.status(404).send("해당하는 유저를 찾을 수 없습니다.");

  return res.send(result);
};
