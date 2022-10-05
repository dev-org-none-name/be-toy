import client from "@libs/client";
import { Request, Response } from "express";

export const getUsersHandler = async (req: Request, res: Response) => {
  const result = await client.user.findMany();
  return res.send(result);
};

export const postUsersHandler = async (req: Request, res: Response) => {
  const data = req.body;
  await client.user.create({
    data: { ...data },
  });
  return res.json({
    ok: true,
  });
};
