"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRoute = void 0;
const express_1 = __importDefault(require("express"));
const Order_controllar_1 = __importDefault(require("./Order.controllar"));
const router = express_1.default.Router();
router.post('/orders', Order_controllar_1.default.createOrder);
router.get('/orders', Order_controllar_1.default.getOrder);
router.get('/orders/single-order/:orderId', Order_controllar_1.default.getSingleOrder);
router.get('/orders/revenue', Order_controllar_1.default.totalRevinew);
router.put('/orders/:orderId', Order_controllar_1.default.putSingleOrder);
router.delete('/orders/:orderId', Order_controllar_1.default.deleteSingleOrder);
exports.OrderRoute = router;
