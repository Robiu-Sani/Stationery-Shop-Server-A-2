import { Request, Response } from 'express';
import { ProductsServices } from './Products.services';

const createProducts = async (req: Request, res: Response) => {
  try {
    const postProduct = req.body;
    const data = await ProductsServices.createProductIntoDB(postProduct);
    res.json({
      success: true,
      message: 'Product created successfully',
      //   sendingData: postProduct,
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Product created failed',
      err,
    });
  }
};

const getProducts = async (req: Request, res: Response) => {
  try {
    const data = await ProductsServices.getProductIntoDB();
    res.json({
      status: true,
      message: 'Products retrieved successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Product created failed',
      err,
    });
  }
};

const getSingleProducts = async (req: Request, res: Response) => {
  try {
    const productId: number | string = req.body.productId;
    const data = await ProductsServices.getSingleProductIntoDB(productId);
    res.json({
      status: true,
      message: 'Products retrieved successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Product created failed',
      err,
    });
  }
};

const putSingleProducts = async (req: Request, res: Response) => {
  try {
    const productId: number | string = req.body.productId;
    const updateData: object = req.body;
    const data = await ProductsServices.putSingleProductIntoDB(
      productId,
      updateData,
    );
    res.json({
      status: true,
      message: 'Product updated successfully',
      data,
      updateData,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Product created failed',
      err,
    });
  }
};

const deleteSingleProducts = async (req: Request, res: Response) => {
  try {
    const productId: number | string = req.body.productId;
    const data = await ProductsServices.deleteSingleProductIntoDB(productId);
    res.json({
      status: true,
      message: 'Products retrieved successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Product created failed',
      err,
    });
  }
};

const productControlor = {
  createProducts,
  getProducts,
  getSingleProducts,
  putSingleProducts,
  deleteSingleProducts,
};

export default productControlor;
