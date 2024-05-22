import express from "express";
import { productController } from "./product.controller";
const router = express.Router();

router.post("/products", productController.createProduct);
router.get("/products/:productId", productController.getProducts);
router.put("/products/:productID", productController.updateProduct);
router.delete("/products/:productID", productController.deleteProduct);
router.get("/products", productController.searchProduct);

export const studentRoutes = router;
