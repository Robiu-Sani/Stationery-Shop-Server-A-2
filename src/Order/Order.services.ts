import { Order } from './Order.interface';
import OrderModel from './Order.model';

const createOrderIntoDB = async (Order: Order) => {
  const result = await OrderModel.create(Order);
  return result;
};

const getOrderIntoDB = async () => {
  const result = await OrderModel.find();
  return result;
};

const totalRevenueIntoDB = async () => {
  const result = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result;
};

const getSingleOrderIntoDB = async (id: number | string) => {
  const result = await OrderModel.findOne({ id });
  return result;
};

const deleteSingleOrderIntoDB = async (id: number | string) => {
  const result = await OrderModel.deleteOne({ id });
  return result;
};

const putSingleOrderIntoDB = async (
  id: number | string,
  updateData: object,
) => {
  const result = await OrderModel.findOneAndUpdate(
    { id },
    { $set: updateData },
    { new: true },
  );
  return result;
};

export const OrdersServices = {
  createOrderIntoDB,
  getOrderIntoDB,
  getSingleOrderIntoDB,
  putSingleOrderIntoDB,
  deleteSingleOrderIntoDB,
  totalRevenueIntoDB,
};
