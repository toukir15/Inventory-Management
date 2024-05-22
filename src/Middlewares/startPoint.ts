import { Request, Response } from "express";

export const startPoint = (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "API starting point",
  });
};
