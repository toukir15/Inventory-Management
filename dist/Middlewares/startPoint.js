"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startPoint = void 0;
const startPoint = (req, res, next) => {
    res.status(200).json({
        success: true,
        message: "API starting point",
    });
};
exports.startPoint = startPoint;
