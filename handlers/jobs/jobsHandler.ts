import getLoginUserId from "@libs/authentications/getLoginUserId";
import client from "@libs/client";
import { Request, Response } from "express";

export const getJobsHandler = async (req: Request, res: Response) => {
  const loginUserId = getLoginUserId(req);

  const jobs = await client.job.findMany({
    select: {
      id: true,
      companyId: true,
      title: true,
      desc: true,
    },
  });

  if (jobs == null)
    return res.status(404).send("해당하는 공고를 찾을 수 없습니다.");
  return res.json({ jobs });
};

export const postJobsHandler = async (req: Request, res: Response) => {
  try {
    await client.job.create({
      data: {
        companyId: 1,
        title: "[크래프트]백엔드 채용",
        desc: "경력은 1년 이상",
        createAt: "2022-10-25T13:38:00Z",
        startAt: "2022-10-25T13:38:00Z",
        endAt: "2022-10-25T13:38:00Z",
        isClosed: false,
      },
    });
  } catch (e) {
    return res.status(400).json({
      statusCode: 400,
      error: "제데로 된 데이터 형식이 아닙니다. 다시 시도 하십시오",
    });
  }
};
