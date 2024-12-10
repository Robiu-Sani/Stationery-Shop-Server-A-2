import express from 'express';
import productControlor from './Products.controllar';

const router = express.Router();

router.post('/products', productControlor.createProducts);
router.get('/products', productControlor.getProducts);
router.get('/products/:productId', productControlor.getSingleProducts);
router.put('/products/:productId', productControlor.putSingleProducts);
router.delete('/products/:productId', productControlor.deleteSingleProducts);

export const ProductRoute = router;
