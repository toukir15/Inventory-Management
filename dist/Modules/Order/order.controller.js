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
exports.orderController = void 0;
const order_service_1 = require("./order.service");
const order_validation_1 = require("./order.validation");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body.order;
        const ValidateOrder = order_validation_1.orderSchema.parse(order);
        const result = yield order_service_1.orderServicr.createOrderIntoDB(ValidateOrder);
        // check result for have quantity
        if (result) {
            res.status(200).json({
                success: true,
                message: "Order created successfully",
                data: result,
            });
        }
        else {
            res.status(200).json({
                success: false,
                message: "Insufficient quantity available in inventory",
            });
        }
    }
    catch (error) {
        res
            .status(500)
            .json({ success: false, message: "Somethig went wrong!", data: error });
    }
});
const getOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const email = req.query.email;
        const result = yield order_service_1.orderServicr.getOrdersFromDB(email);
        res.status(200).json({
            success: true,
            message: "Retrive all order data successfully.",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Somethig went wrong!",
            data: error,
        });
    }
});
exports.orderController = {
    createOrder,
    getOrders,
};
