import client from "@libs/client";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

export const getJobHandler = async (req: Request, res: Response) => {
  const {
    params: { id },
    headers: { cookie },
  } = req;

  const token = cookie.split("token=")[1];
  const userId = jwt.decode(token)["userId"];

  const result = await client.job.findUnique({
    where: {
      id: +id,
    },
  });
  const isBookmark = Boolean(
    await client.bookmark.findFirst({
      where: {
        jobId: +id,
        userId: userId,
      },
      select: {
        id: true,
      },
    })
  );
  if (result == null)
    return res.status(404).send("해당하는 공고를 찾을 수 없습니다.");
  return res.json({ result, isBookmark });
};
