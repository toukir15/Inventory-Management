import { Request, Response } from "express";
import { orderServicr } from "./order.service";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const result = await orderServicr.createOrderIntoDB(order);
    res.status(200).json({
      success: true,
      message: "Order created successfully",
      data: result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Somethig went wrong!", data: error });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServicr.getOrdersFromDB();
    res.status(200).json({
      success: true,
      message: "Retrive all order data successfully.",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Somethig went wrong!",
      data: error,
    });
  }
};

export const orderController = {
  createOrder,
  getOrders,
};
