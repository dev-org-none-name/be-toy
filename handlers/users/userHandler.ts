import client from "@libs/client";

export const getUserHandler = async (req: any, res: any) => {
  return res.send("여기는 Users!");
};

export const postUserHandler = async (req: any, res: any) => {
  await client.user.create({
    data: {
      userName: "moon",
      phone: 2232323,
    },
  });
  return res.json({
    ok: true,
  });
};

export const getMeHandler = async (req: any, res: any) => {
  return res.send("여기는 ME!");
};
