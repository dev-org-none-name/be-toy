import getLoginUserId from "@libs/authentications/getLoginUserId";
import client from "@libs/client";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

export const getJobHandler = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;
  const loginUserId = getLoginUserId(req);

  const job = await client.job.findUnique({
    where: {
      id: +id,
    },
  });
  const isBookmark = Boolean(
    await client.bookmark.findFirst({
      where: {
        jobId: +id,
        userId: loginUserId,
      },
      select: {
        id: true,
      },
    })
  );
  if (job == null)
    return res.status(404).send("해당하는 공고를 찾을 수 없습니다.");
  return res.json({ job, isBookmark });
};
