import express from "express";
import { orderController } from "./order.controller";
const router = express.Router();

router.post("/create-order", orderController.createOrder);
router.get("/get-orders", orderController.getOrders);

export const orderRoutes = router;
