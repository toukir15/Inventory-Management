import express, { Application, Request, Response } from "express";
export const app: Application = express();
import cors from "cors";
import { studentRoutes } from "./Modules/Product/product.route";

app.use(express.json());
app.use(cors());
app.use("/api/v1/students/", studentRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
