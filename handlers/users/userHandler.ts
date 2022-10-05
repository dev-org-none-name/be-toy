import client from "@libs/client";
import { Request, Response } from "express";

export const getUserHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const queryId = Number(id);
  const result = await client.user.findUnique({
    where: {
      id: queryId,
    },
  });
  return res.send(result);
};
