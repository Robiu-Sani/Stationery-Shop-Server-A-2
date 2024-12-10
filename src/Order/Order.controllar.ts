import { Request, Response } from 'express';
import { OrdersServices } from './Order.services';

const createOrder = async (req: Request, res: Response) => {
  try {
    const postOrder = req.body;
    const data = await OrdersServices.createOrderIntoDB(postOrder);
    res.json({
      success: true,
      message: 'Order created successfully',
      sendingData: postOrder,
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Order created failed',
      err,
    });
  }
};

const getOrder = async (req: Request, res: Response) => {
  try {
    const data = await OrdersServices.getOrderIntoDB();
    res.json({
      status: true,
      message: 'Order retrieved successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Order created failed',
      err,
    });
  }
};

const getSingleOrder = async (req: Request, res: Response) => {
  try {
    const OrderId: number | string = req.body.OrderId;
    const data = await OrdersServices.getSingleOrderIntoDB(OrderId);
    res.json({
      status: true,
      message: 'Order retrieved successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Order created failed',
      err,
    });
  }
};

const totalRevinew = async (req: Request, res: Response) => {
  try {
    const data = await OrdersServices.totalRevenueIntoDB();
    res.json({
      status: true,
      message: 'Revenue calculated successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'geting revinew failed',
      err,
    });
  }
};

const putSingleOrder = async (req: Request, res: Response) => {
  try {
    const OrderId: number | string = req.body.OrderId;
    const updateData: object = req.body;
    const data = await OrdersServices.putSingleOrderIntoDB(OrderId, updateData);
    res.json({
      status: true,
      message: 'Order updated successfully',
      data,
      updateData,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Order created failed',
      err,
    });
  }
};

const deleteSingleOrder = async (req: Request, res: Response) => {
  try {
    const OrderId: number | string = req.body.OrderId;
    const data = await OrdersServices.deleteSingleOrderIntoDB(OrderId);
    res.json({
      status: true,
      message: 'Order retrieved successfully',
      data,
    });
  } catch (err) {
    res.json({
      success: false,
      message: 'Order created failed',
      err,
    });
  }
};

const OrderControlor = {
  createOrder,
  getOrder,
  getSingleOrder,
  putSingleOrder,
  deleteSingleOrder,
  totalRevinew,
};

export default OrderControlor;
