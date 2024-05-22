import { TUpdateFields } from "../Product/product.interface";
import { Order } from "../order.model";
import { Product } from "../product.model";
import { TOrder } from "./order.interface";

const createOrderIntoDB = async (order: TOrder) => {
  const findProduct = await Product.findOne({ _id: order.productId });
  const findProductQuatity = findProduct?.inventory.quantity;
  const orderQuantity = order.quantity;

  // check in collection have quantity or not and check order with collection quantity
  if (findProductQuatity && findProductQuatity >= orderQuantity) {
    const quantityCalc = findProductQuatity - orderQuantity;
    let updateFields: TUpdateFields = {
      "inventory.quantity": quantityCalc,
    };

    // Add inventory.inStock field conditionally
    if (quantityCalc == 0) {
      updateFields["inventory.inStock"] = false;
    }
    await Product.updateOne({ _id: order.productId }, updateFields);
    const result = await Order.create(order);
    return result;
  } else {
    return;
  }
};

const getOrdersFromDB = async (email: string) => {
  if (email) {
    const result = await Order.findOne({ email });
    return result;
  } else {
    const result = await Order.find();
    return result;
  }
};

export const orderServicr = {
  createOrderIntoDB,
  getOrdersFromDB,
};
