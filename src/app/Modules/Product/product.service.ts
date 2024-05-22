import { Product } from "../product.model";
import { TProduct } from "./product.interface";

const createProductIntoDB = async (product: TProduct) => {
  const result = await Product.create(product);
  return result;
};

const getProductsFromDB = async (productId: string) => {
  if (productId) {
    const result = await Product.findOne({ _id: productId });
    return result;
  } else {
    const result = await Product.find();
    return result;
  }
};

const updateProductIntoDB = async (
  productID: string,
  productData: TProduct
) => {
  const result = await Product.findByIdAndUpdate(
    productID,
    { $set: productData },
    {
      new: true,
    }
  );
  return result;
};

const deleteProductFromDB = async (productID: string) => {
  const result = await Product.deleteOne({ _id: productID });
  return result;
};

const searchProductIntoDB = async (searchTerm: string) => {
  const result = await Product.find({
    $or: [
      { name: { $regex: new RegExp(searchTerm, "i") } },
      { description: { $regex: new RegExp(searchTerm, "i") } },
    ],
  });
  return result;
};

export const productService = {
  createProductIntoDB,
  getProductsFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
  searchProductIntoDB,
};
