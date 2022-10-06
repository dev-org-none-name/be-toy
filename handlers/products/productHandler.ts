import client from "@libs/client";
import { Request, Response } from "express";

export const getProductsHandler = async (req: Request, res: Response) => {
  const result = await client.product.findMany();
  return res.send(result);
};

export const postProductsHandler = async (req: Request, res: Response) => {
  const data = req.body;
  await client.product.create({
    data: {
      name: "물건1",
      price: 5000,
      image: "이미지 URL",
      description: "물건의 대한 설명 물건의 대한 설명 물건의 대한 설명",
      user: {
        connect: {
          id: 9,
        },
      },
    },
  });
  return res.json({
    ok: true,
  });
};
