import client from "@libs/client";
import { Request, Response } from "express";

export const getSignupHandler = async (req: Request, res: Response) => {
  return res.send("회원가입 페이지");
};

export const postSignupHandler = async (req: Request, res: Response) => {
  const data = req.body;
  try {
    await client.user.create({
      data: { ...data },
    });
    return res.json({
      ok: true,
    });
  } catch {
    return res.status(400).json({
      statusCode: 400,
      error: "제데로 된 데이터 형식이 아닙니다. 다시 시도 하십시오",
    });
    // 여기서 이제 무슨 필드가 없는지 나중에 검증해야겠죵 예를들어 원래 있는 유저 이름으로 회원가입을 한다거나 이런 것들 (유니크 값)
    // https://www.prisma.io/docs/concepts/components/prisma-client/handling-exceptions-and-errors
  }
};
