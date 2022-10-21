import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";
import companyRouter from "./routes/companyRouter";
import jobRouter from "./routes/jobRouter";
import authRouter from "./routes/authRouter";

dotenv.config();
if (!process.env.PORT) process.exit(1);
const PORT: number = parseInt(process.env.PORT as string, 10);
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/companies", companyRouter);
app.use("/jobs", jobRouter);

app.use(function (req, res, next) {
  res.status(404).send("찾을 수 없는 페이지 입니다.");
});

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
