import { Request, Response, NextFunction } from "express";

export const startPoint = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({
    success: true,
    message: "API starting point",
  });
};
