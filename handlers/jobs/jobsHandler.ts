import client from "@libs/client";
import { Request, Response } from "express";

export const getJobsHandler = async (req: Request, res: Response) => {
  const result = await client.job.findMany({
    select: {
      id: true,
      title: true,
      address: true,
    },
  });
  return res.send(result);
};

export const postJobsHandler = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await client.job.create({
      data: {
        companyId: 1,
        title: "[크래프트]UX/UI 개발자 채용",
        description: "경력은 2년 이상",
        address: "부천시 중동로 54220-12",
      },
    });
    return res.json({
      ok: true,
    });
  } catch (e) {
    return res.status(400).json({
      statusCode: 400,
      error: "제데로 된 데이터 형식이 아닙니다. 다시 시도 하십시오",
    });
  }
};
