import getLoginUserId from "@libs/authentications/getLoginUserId";
import client from "@libs/client";
import { Request, Response } from "express";
const jwt = require("jsonwebtoken");

export const getCompaniesHandler = async (req: Request, res: Response) => {
  const result = await client.company.findMany({
    select: {
      id: true,
      userId: true,
      name: true,
      description: true,
      jobs: {
        select: {
          id: true,
          title: true,
        },
      },
      companyPhotos: {
        select: {
          url: true,
        },
      },
    },
  });
  return res.send(result);
};

export const postCompaniesHandler = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  const loginUserId = getLoginUserId(req);

  const findUser = await client.user.findFirst({
    where: {
      id: loginUserId,
    },
  });

  try {
    await client.user.update({
      where: {
        id: loginUserId,
      },
      data: {
        role: "Recruiter",
      },
    });
    await client.company.create({
      data: {
        name: "크래프트",
        description:
          "크래프트는 16년간 국/내외 Healthcare사업을 수행해 온 ㈜인성정보의 헬스케어사업부가 2020년 분할되어 설립된 회사입니다.",
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
