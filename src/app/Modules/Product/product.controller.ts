import { Request, Response } from "express";
import { productService } from "./product.service";
import { ProductSchema } from "./product.validation";

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body.product;
    const productValidation = ProductSchema.parse(product);
    const result = await productService.createProductIntoDB(productValidation);
    res.status(200).json({
      success: true,
      message: "Product create successfully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await productService.getProductsFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Retrive product data!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const updatedData = req.body;
    const productID = req.params.productID;
    const result = await productService.updateProductIntoDB(
      productID,
      updatedData
    );
    res.status(200).json({
      success: true,
      message: "Update product successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const productID = req.params.productID;
    const result = await productService.deleteProductFromDB(productID);
    res.status(200).json({
      success: true,
      message: "Delete product successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

const searchProduct = async (req: Request, res: Response) => {
  try {
    const searchTerm = req.query.searchTerm;
    const result = await productService.searchProductIntoDB(
      searchTerm as string
    );
    res.status(200).json({
      success: true,
      message: "Search product successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong!",
      data: error,
    });
  }
};

export const productController = {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
  searchProduct,
};
