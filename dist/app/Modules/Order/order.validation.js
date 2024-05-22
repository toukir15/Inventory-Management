"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
// Define your Zod schema
exports.orderSchema = zod_1.z.object({
    email: zod_1.z
        .string({
        required_error: "Email is required",
    })
        .email("Email is invalid")
        .min(1, "Email is required"),
    productId: zod_1.z
        .string({ required_error: "ProductId is required" })
        .min(1, "Product ID is required"),
    price: zod_1.z
        .number({
        required_error: "Price is required",
    })
        .positive("Price must be a positive number")
        .min(0.01, "Price is required"),
    quantity: zod_1.z
        .number({ required_error: "Quantity is required" })
        .positive("Quantity must be a positive number")
        .min(1, "Quantity is required"),
});
