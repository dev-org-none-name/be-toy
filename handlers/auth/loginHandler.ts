import { Request, Response } from "express";
const { v4: uuidv4 } = require("uuid");
const { findUserByUsername } = require("@service/userService");
const { generateTokens } = require("@libs/authentications/jwt");
const { addRefreshTokenToWhitelist } = require("@service/tokenService");

export const getLoginHandler = async (req: Request, res: Response) => {
  return res.sendFile(__dirname + "/index.html");
};

export const postLoginHandler = async (req: Request, res: Response) => {
  const jti = uuidv4();
  const { username } = req.body;
  const existingUser = await findUserByUsername(username);
  const { accessToken, refreshToken } = generateTokens(existingUser, jti);
  await addRefreshTokenToWhitelist({
    jti,
    refreshToken,
    userId: existingUser.id,
  });

  res.cookie("token", accessToken);
  return res.redirect("/users");
};
