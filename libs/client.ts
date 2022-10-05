// 여기는 프리즈마를 위한 일종의 세팅 과정입니다 중요한 부분은 아니에욥 설명이 필요하면 말해주세요!

import { PrismaClient } from "@prisma/client";

declare global {
  var client: PrismaClient | undefined;
}

const client = global.client || new PrismaClient();

if (process.env.NODE_ENV === "development") global.client = client;

export default client;
