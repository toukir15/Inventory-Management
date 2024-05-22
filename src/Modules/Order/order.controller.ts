import { Request, Response } from "express";
import { orderServicr } from "./order.service";
import { orderSchema } from "./order.validation";

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body.order;
    const ValidateOrder = orderSchema.parse(order);
    const result = await orderServicr.createOrderIntoDB(ValidateOrder);

    // check result for have quantity
    if (result) {
      res.status(200).json({
        success: true,
        message: "Order created successfully",
        data: result,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "Insufficient quantity available in inventory",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Somethig went wrong!", data: error });
  }
};

const getOrders = async (req: Request, res: Response) => {
  try {
    const email = req.query.email;
    const result = await orderServicr.getOrdersFromDB(email as string);
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
