import { Product } from "../product.model";
import { TProduct } from "./product.interface";

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};

const getProductFromDB = async (productID: string) => {
  const result = await Product.findOne({ _id: productID });
  return result;
};

const updateProductIntoDB = async (productID: string) => {
  const result = await Product.findByIdAndUpdate(
    productID,
    { "inventory.inStock": false },
    { new: true }
  );
  return result;
};

const deleteProductFromDB = async (productID: string) => {
  const result = await Product.deleteOne({ _id: productID });
  return result;
};

const searchProductIntoDB = async (searchTerm: string) => {
  const result = await Product.find({
    tags: { $in: [searchTerm] },
  });
  return result;
};

export const productService = {
  createProductIntoDB,
  getProductsFromDB,
  getProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  searchProductIntoDB,
};
