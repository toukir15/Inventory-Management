"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_model_1 = require("../product.model");
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.create(product);
    return result;
});
const getProductsFromDB = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    if (productId) {
        const result = yield product_model_1.Product.findOne({ _id: productId });
        return result;
    }
    else {
        const result = yield product_model_1.Product.find();
        return result;
    }
});
const updateProductIntoDB = (productID, productData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.findByIdAndUpdate(productID, { $set: productData }, {
        new: true,
    });
    return result;
});
const deleteProductFromDB = (productID) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.deleteOne({ _id: productID });
    return result;
});
const searchProductIntoDB = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield product_model_1.Product.find({
        $or: [
            { name: { $regex: new RegExp(searchTerm, "i") } },
            { description: { $regex: new RegExp(searchTerm, "i") } },
        ],
    });
    return result;
});
exports.productService = {
    createProductIntoDB,
    getProductsFromDB,
    updateProductIntoDB,
    deleteProductFromDB,
    searchProductIntoDB,
};
