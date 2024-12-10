import express from 'express';
import OrderControlor from './Order.controllar';

const router = express.Router();

router.post('/orders', OrderControlor.createOrder);

router.get('/orders', OrderControlor.getOrder);
router.get('/orders/single-order/:orderId', OrderControlor.getSingleOrder);
router.get('/orders/revenue', OrderControlor.totalRevinew);
router.put('/orders/:orderId', OrderControlor.putSingleOrder);
router.delete('/orders/:orderId', OrderControlor.deleteSingleOrder);

export const OrderRoute = router;
