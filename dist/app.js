"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const product_route_1 = require("./Modules/Product/product.route");
const order_route_1 = require("./Modules/Order/order.route");
const notFoundRoute_1 = require("./Middlewares/notFoundRoute");
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/api", product_route_1.studentRoutes);
exports.app.use("/api", order_route_1.orderRoutes);
exports.app.use(notFoundRoute_1.notFoundHandler);
