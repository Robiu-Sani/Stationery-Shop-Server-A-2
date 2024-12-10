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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsServices = void 0;
const Products_model_1 = __importDefault(require("./Products.model"));
const createProductIntoDB = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Products_model_1.default.create(product);
    return result;
});
const getProductIntoDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Products_model_1.default.find();
    return result;
});
const getSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Products_model_1.default.findOne({ id });
    return result;
});
const deleteSingleProductIntoDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Products_model_1.default.deleteOne({ id });
    return result;
});
const putSingleProductIntoDB = (id, updateData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield Products_model_1.default.findOneAndUpdate({ id }, { $set: updateData }, { new: true });
    return result;
});
exports.ProductsServices = {
    createProductIntoDB,
    getProductIntoDB,
    getSingleProductIntoDB,
    putSingleProductIntoDB,
    deleteSingleProductIntoDB,
};
