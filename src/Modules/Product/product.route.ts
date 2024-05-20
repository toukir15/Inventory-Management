import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/create-product", productController.createProduct);
router.get("/get-products", productController.getProducts);
router.get("/get-product/:productID", productController.getProduct);
router.put("/update-product/:productID", productController.updateProduct);
router.delete("/delete-product/:productID", productController.deleteProduct);
router.get("/search-product", productController.searchProduct);

export const studentRoutes = router;
