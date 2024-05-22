import { z } from "zod";

// Define your Zod schema
export const orderSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email("Email is invalid")
    .min(1, "Email is required"),
  productId: z
    .string({ required_error: "ProductId is required" })
    .min(1, "Product ID is required"),
  price: z
    .number({
      required_error: "Price is required",
    })
    .positive("Price must be a positive number")
    .min(0.01, "Price is required"),
  quantity: z
    .number({ required_error: "Quantity is required" })
    .positive("Quantity must be a positive number")
    .min(1, "Quantity is required"),
});
