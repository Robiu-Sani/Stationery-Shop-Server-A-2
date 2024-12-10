"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoute = void 0;
const express_1 = __importDefault(require("express"));
const Products_controllar_1 = __importDefault(require("./Products.controllar"));
const router = express_1.default.Router();
router.post('/products', Products_controllar_1.default.createProducts);
router.get('/products', Products_controllar_1.default.getProducts);
router.get('/products/:productId', Products_controllar_1.default.getSingleProducts);
router.put('/products/:productId', Products_controllar_1.default.putSingleProducts);
router.delete('/products/:productId', Products_controllar_1.default.deleteSingleProducts);
exports.ProductRoute = router;
