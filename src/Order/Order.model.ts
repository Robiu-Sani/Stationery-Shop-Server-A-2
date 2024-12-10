import mongoose, { model } from 'mongoose';
import { Order } from './Order.interface';

const orderSchema = new mongoose.Schema<Order>(
  {
    email: {
      type: String,
      required: true,
      trim: true,
      validate: {
        validator: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        message: 'Invalid email format',
      },
    },
    product: {
      type: String,
      ref: 'Product',
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: true,
      min: [0, 'Total price cannot be negative'],
    },
  },
  {
    timestamps: true,
  },
);

const OrderModel = model<Order>('order', orderSchema);

export default OrderModel;
