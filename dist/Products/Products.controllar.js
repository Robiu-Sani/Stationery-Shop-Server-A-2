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
const Products_services_1 = require("./Products.services");
const createProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postProduct = req.body;
        const data = yield Products_services_1.ProductsServices.createProductIntoDB(postProduct);
        res.json({
            success: true,
            message: 'Product created successfully',
            //   sendingData: postProduct,
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Product created failed',
            err,
        });
    }
});
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Products_services_1.ProductsServices.getProductIntoDB();
        res.json({
            status: true,
            message: 'Products retrieved successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Product created failed',
            err,
        });
    }
});
const getSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.body.productId;
        const data = yield Products_services_1.ProductsServices.getSingleProductIntoDB(productId);
        res.json({
            status: true,
            message: 'Products retrieved successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Product created failed',
            err,
        });
    }
});
const putSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.body.productId;
        const updateData = req.body;
        const data = yield Products_services_1.ProductsServices.putSingleProductIntoDB(productId, updateData);
        res.json({
            status: true,
            message: 'Product updated successfully',
            data,
            updateData,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Product created failed',
            err,
        });
    }
});
const deleteSingleProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = req.body.productId;
        const data = yield Products_services_1.ProductsServices.deleteSingleProductIntoDB(productId);
        res.json({
            status: true,
            message: 'Products retrieved successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Product created failed',
            err,
        });
    }
});
const productControlor = {
    createProducts,
    getProducts,
    getSingleProducts,
    putSingleProducts,
    deleteSingleProducts,
};
exports.default = productControlor;
