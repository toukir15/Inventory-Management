import { z } from "zod";

// Define the Variants schema
const VariantsSchema = z.object({
  type: z
    .string()
    .min(1, { message: "Variant type is required and cannot be empty" }),
  value: z
    .string()
    .min(1, { message: "Variant value is required and cannot be empty" }),
});

// Define the Inventory schema
const InventorySchema = z.object({
  quantity: z.number().min(1, { message: "Quantity must be at least 1" }),
  inStock: z.boolean({
    required_error: "InStock is required and must be a boolean",
  }),
});

// Define the Product schema
export const ProductSchema = z.object({
  name: z
    .string()
    .min(1, { message: "Product name is required and cannot be empty" }),
  description: z
    .string()
    .min(1, { message: "Description is required and cannot be empty" }),
  price: z.number().min(1, { message: "Price must be at least 1" }),
  category: z
    .string()
    .min(1, { message: "Category is required and cannot be empty" }),
  tags: z.array(z.string().min(1, { message: "Tag cannot be empty" }), {
    required_error: "Tags are required",
  }),
  variants: z.array(VariantsSchema, {
    required_error: "Variants are required",
  }),
  inventory: InventorySchema,
});
