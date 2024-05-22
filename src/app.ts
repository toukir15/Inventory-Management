import express, { Application, Request, Response } from "express";
export const app: Application = express();
import cors from "cors";
import { studentRoutes } from "./app/Modules/Product/product.route";
import { orderRoutes } from "./app/Modules/Order/order.route";
import { notFoundHandler } from "./app/Middlewares/notFoundRoute";

app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "server is running" });
});
app.use("/api", studentRoutes);
app.use("/api", orderRoutes);
app.use(notFoundHandler);
