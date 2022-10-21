import client from "@libs/client";
import { Request, Response } from "express";

export const getCompaniesHandler = async (req: Request, res: Response) => {
  const result = await client.company.findMany({
    select: {
      id: true,
      userId: true,
      name: true,
      description: true,
      jobs: true,
      photos: {
        select: {
          url: true,
        },
      },
    },
  });
  return res.send(result);
};

export const postCompaniesHandler = async (req: Request, res: Response) => {
  const data = req.body;

  try {
    await client.company.create({
      data: {
        name: "회사명",
        description:
          "하이케어넷(구.인성정보 헬스케어사업부)는 16년간 국/내외 Healthcare사업을 수행해 온 ㈜인성정보의 헬스케어사업부가 2020년 분할되어 설립된 회사입니다.",
        userId: 1,
      },
    });
    return res.json({
      ok: true,
    });
  } catch {
    return res.status(400).json({
      statusCode: 400,
      error: "제데로 된 데이터 형식이 아닙니다. 다시 시도 하십시오",
    });
  }
};
