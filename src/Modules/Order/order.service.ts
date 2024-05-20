import { Order } from "../order.model";
import { TOrder } from "./order.interface";

const createOrderIntoDB = async (order: TOrder) => {
  const result = await Order.create(order);
  return result;
};

const getOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};

export const orderServicr = {
  createOrderIntoDB,
  getOrdersFromDB,
};
