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
const Order_services_1 = require("./Order.services");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postOrder = req.body;
        const data = yield Order_services_1.OrdersServices.createOrderIntoDB(postOrder);
        res.json({
            success: true,
            message: 'Order created successfully',
            sendingData: postOrder,
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Order created failed',
            err,
        });
    }
});
const getOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Order_services_1.OrdersServices.getOrderIntoDB();
        res.json({
            status: true,
            message: 'Order retrieved successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Order created failed',
            err,
        });
    }
});
const getSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderId = req.body.OrderId;
        const data = yield Order_services_1.OrdersServices.getSingleOrderIntoDB(OrderId);
        res.json({
            status: true,
            message: 'Order retrieved successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Order created failed',
            err,
        });
    }
});
const totalRevinew = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield Order_services_1.OrdersServices.totalRevenueIntoDB();
        res.json({
            status: true,
            message: 'Revenue calculated successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'geting revinew failed',
            err,
        });
    }
});
const putSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderId = req.body.OrderId;
        const updateData = req.body;
        const data = yield Order_services_1.OrdersServices.putSingleOrderIntoDB(OrderId, updateData);
        res.json({
            status: true,
            message: 'Order updated successfully',
            data,
            updateData,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Order created failed',
            err,
        });
    }
});
const deleteSingleOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const OrderId = req.body.OrderId;
        const data = yield Order_services_1.OrdersServices.deleteSingleOrderIntoDB(OrderId);
        res.json({
            status: true,
            message: 'Order retrieved successfully',
            data,
        });
    }
    catch (err) {
        res.json({
            success: false,
            message: 'Order created failed',
            err,
        });
    }
});
const OrderControlor = {
    createOrder,
    getOrder,
    getSingleOrder,
    putSingleOrder,
    deleteSingleOrder,
    totalRevinew,
};
exports.default = OrderControlor;
