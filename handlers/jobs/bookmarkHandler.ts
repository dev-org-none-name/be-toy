import getLoginUserId from "@libs/authentications/getLoginUserId";
import client from "@libs/client";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

export const getBookmarkHandler = async (req: Request, res: Response) => {
  return res.sendFile(__dirname + "/index.html");
};

export const postBookmarkHandler = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  const loginUserId = getLoginUserId(req);

  const alreadyExists = await client.bookmark.findFirst({
    where: {
      userId: loginUserId,
      jobId: +id,
    },
  });

  if (alreadyExists) {
    await client.bookmark.delete({
      where: {
        id: alreadyExists.id,
      },
    });
  } else {
    await client.bookmark.create({
      data: {
        user: {
          connect: {
            id: loginUserId,
          },
        },
        job: {
          connect: {
            id: +id,
          },
        },
      },
    });
  }
  res.json({ ok: true });
};
