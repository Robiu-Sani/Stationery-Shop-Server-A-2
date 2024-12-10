"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const Products_route_1 = require("./Products/Products.route");
const Order_route_1 = require("./Order/Order.route");
const app = (0, express_1.default)();
//parser
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//applycation routes
app.use('/api', Products_route_1.ProductRoute);
app.use('/api', Order_route_1.OrderRoute);
app.get('/', (req, res) => {
    res.send('Steshonary shop server is running!');
});
exports.default = app;
