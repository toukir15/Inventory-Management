import express, { Application } from "express";
export const app: Application = express();
import cors from "cors";
import { studentRoutes } from "./Modules/Product/product.route";
import { orderRoutes } from "./Modules/Order/order.route";

app.use(express.json());
app.use(cors());
app.use("/api/v1/products/", studentRoutes);
app.use("/api/v1/orders/", orderRoutes);
