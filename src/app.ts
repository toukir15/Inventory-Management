import express, { Application, Request, Response } from "express";
export const app: Application = express();
import cors from "cors";

app.use(express.json());
app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
