"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const zod_1 = require("zod");
// Define the Variants schema
const VariantsSchema = zod_1.z.object({
    type: zod_1.z
        .string({
        required_error: "Type is required",
    })
        .min(1, { message: "Variant type is required and cannot be empty" }),
    value: zod_1.z
        .string({
        required_error: "Value is required",
    })
        .min(1, { message: "Variant value is required and cannot be empty" }),
});
// Define the Inventory schema
const InventorySchema = zod_1.z.object({
    quantity: zod_1.z
        .number({
        required_error: "Quantity is required",
    })
        .min(1, { message: "Quantity must be at least 1" }),
    inStock: zod_1.z.boolean({
        required_error: "InStock is required and must be a boolean",
    }),
});
// Define the Product schema
exports.ProductSchema = zod_1.z.object({
    name: zod_1.z
        .string({
        required_error: "Name is required",
    })
        .min(1, { message: "Name is required and cannot be empty" }),
    description: zod_1.z
        .string({
        required_error: "Description is required",
    })
        .min(1, { message: "Description is required and cannot be empty" }),
    price: zod_1.z
        .number({
        required_error: "Price is required",
    })
        .min(1, { message: "Price must be at least 1" }),
    category: zod_1.z
        .string({
        required_error: "Category is required",
    })
        .min(1, { message: "Category is required and cannot be empty" }),
    tags: zod_1.z.array(zod_1.z
        .string({
        required_error: "Tag is required",
    })
        .min(1, { message: "Tag cannot be empty" }), {
        required_error: "Tags are required",
    }),
    variants: zod_1.z.array(VariantsSchema, {
        required_error: "Variants are required",
    }),
    inventory: InventorySchema,
});
