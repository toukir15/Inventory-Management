import express, { Application } from "express";
export const app: Application = express();
import cors from "cors";
import { studentRoutes } from "./Modules/Product/product.route";
import { orderRoutes } from "./Modules/Order/order.route";
import { notFoundHandler } from "./Middlewares/notFoundRoute";

app.use(express.json());
app.use(cors());
app.use("/api", studentRoutes);
app.use("/api", orderRoutes);
app.use(notFoundHandler);
