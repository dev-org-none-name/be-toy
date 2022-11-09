import client from "@libs/client";
import { Request, Response } from "express";

export const getMeHandler = async (req: Request, res: Response) => {
  const token = req.headers.cookie.replace("token=", "");
  var base64Payload = token.split(".")[1];
  var payload = Buffer.from(base64Payload, "base64");
  var result = JSON.parse(payload.toString());
  const me = await client.user.findUnique({
    where: {
      id: result["userId"],
    },
    select: {
      id: true,
      role: true,
      avatar: true,
      username: true,
      email: true,
      phone: true,
      company: {
        select: {
          id: true,
          name: true,
          jobs: {
            select: {
              id: true,
              title: true,
              description: true,
              createdAt: true,
            },
          },
        },
      },
    },
  });
  res.json(me);
};
