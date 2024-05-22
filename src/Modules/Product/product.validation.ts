import { z } from "zod";

// Define the Variants schema
const VariantsSchema = z.object({
  type: z
    .string({
      required_error: "Type is required",
    })
    .min(1, { message: "Variant type is required and cannot be empty" }),
  value: z
    .string({
      required_error: "Value is required",
    })
    .min(1, { message: "Variant value is required and cannot be empty" }),
});

// Define the Inventory schema
const InventorySchema = z.object({
  quantity: z
    .number({
      required_error: "Quantity is required",
    })
    .min(1, { message: "Quantity must be at least 1" }),
  inStock: z.boolean({
    required_error: "InStock is required and must be a boolean",
  }),
});

// Define the Product schema
export const ProductSchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(1, { message: "Name is required and cannot be empty" }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(1, { message: "Description is required and cannot be empty" }),
  price: z
    .number({
      required_error: "Price is required",
    })
    .min(1, { message: "Price must be at least 1" }),
  category: z
    .string({
      required_error: "Category is required",
    })
    .min(1, { message: "Category is required and cannot be empty" }),
  tags: z.array(
    z
      .string({
        required_error: "Tag is required",
      })
      .min(1, { message: "Tag cannot be empty" }),
    {
      required_error: "Tags are required",
    }
  ),
  variants: z.array(VariantsSchema, {
    required_error: "Variants are required",
  }),
  inventory: InventorySchema,
});
