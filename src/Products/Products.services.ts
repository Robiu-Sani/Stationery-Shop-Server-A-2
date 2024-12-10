import { Product } from './Products.interface';
import ProductModel from './Products.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductIntoDB = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductIntoDB = async (id: number | string) => {
  const result = await ProductModel.findOne({ id });
  return result;
};

const deleteSingleProductIntoDB = async (id: number | string) => {
  const result = await ProductModel.deleteOne({ id });
  return result;
};

const putSingleProductIntoDB = async (
  id: number | string,
  updateData: object,
) => {
  const result = await ProductModel.findOneAndUpdate(
    { id },
    { $set: updateData },
    { new: true },
  );
  return result;
};

export const ProductsServices = {
  createProductIntoDB,
  getProductIntoDB,
  getSingleProductIntoDB,
  putSingleProductIntoDB,
  deleteSingleProductIntoDB,
};
