"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentRoute = void 0;
const express_1 = __importDefault(require("express"));
const Products_controllar_1 = __importDefault(require("./Products.controllar"));
const router = express_1.default.Router();
router.post('/products', Products_controllar_1.default.createProducts);
router.get('/products', Products_controllar_1.default.getProducts);
exports.StudentRoute = router;
