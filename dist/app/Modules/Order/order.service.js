"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderServicr = void 0;
const order_model_1 = require("../order.model");
const product_model_1 = require("../product.model");
const createOrderIntoDB = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const findProduct = yield product_model_1.Product.findOne({ _id: order.productId });
    const findProductQuatity = findProduct === null || findProduct === void 0 ? void 0 : findProduct.inventory.quantity;
    const orderQuantity = order.quantity;
    // check in collection have quantity or not and check order with collection quantity
    if (findProductQuatity && findProductQuatity >= orderQuantity) {
        const quantityCalc = findProductQuatity - orderQuantity;
        const updateFields = {
            "inventory.quantity": quantityCalc,
        };
        // Add inventory.inStock field conditionally
        if (quantityCalc == 0) {
            updateFields["inventory.inStock"] = false;
        }
        yield product_model_1.Product.updateOne({ _id: order.productId }, updateFields);
        const result = yield order_model_1.Order.create(order);
        return result;
    }
    else {
        return;
    }
});
const getOrdersFromDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const result = yield order_model_1.Order.findOne({ email });
        return result;
    }
    else {
        const result = yield order_model_1.Order.find();
        return result;
    }
});
exports.orderServicr = {
    createOrderIntoDB,
    getOrdersFromDB,
};
