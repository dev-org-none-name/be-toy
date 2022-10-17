import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter";
import productRouter from "./routes/productRouter";
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
app.use("/products", productRouter);

app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});
