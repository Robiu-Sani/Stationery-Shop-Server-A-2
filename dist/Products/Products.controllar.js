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
        const product = req.body;
        const data = Products_services_1.ProductsServices.createProductIntoDB(product);
        res.json({
            success: true,
            message: 'Product created successfully',
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
        const data = Products_services_1.ProductsServices.getProductIntoDB();
        res.json({
            success: true,
            message: 'Product created successfully',
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
};
exports.default = productControlor;
