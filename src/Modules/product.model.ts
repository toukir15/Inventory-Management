import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the Variants schema
const VariantsSchema = new Schema({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

// Define the Inventory schema
const InventorySchema = new Schema({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
});

// Define the Product schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String], required: true },
  variants: { type: [VariantsSchema], required: true },
  inventory: { type: InventorySchema, required: true },
});

// Create the Product model
export const Product = mongoose.model("Product", ProductSchema);
