import client from "@libs/client";
import { Request, Response } from "express";

export const getUserHandler = async (req: Request, res: Response) => {
  const { id: username } = req.params;
  const result = await client.user.findUnique({
    where: {
      username,
    },
    select: {
      role: true,
      avatar: true,
      username: true,
      email: true,
      phone: true,
      skills: {
        select: {
          skill: true,
        },
      },
    },
  });

  if (result == null) {
    return res
      .status(404)
      .json({ statusCode: 404, error: "해당하는 유저를 찾을 수 없습니다." });
  }

  return res.send(result);
};
