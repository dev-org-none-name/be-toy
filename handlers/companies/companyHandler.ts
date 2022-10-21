import client from "@libs/client";
import { Request, Response } from "express";

export const getCompanyHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await client.company.findUnique({
    where: {
      id: +id,
    },
    select: {
      id: true,
      userId: true,
      name: true,
      description: true,
      photos: {
        select: {
          url: true,
        },
      },
    },
  });
  if (result == null)
    return res.status(404).send("해당하는 회사를 찾을 수 없습니다.");
  return res.send(result);
};
