import express from 'express';

import {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/product.controller.js';

import authMiddleware from '../middleware/auth.middleware.js';
import adminMiddleware from '../middleware/admin.middleware.js';

const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);
productRouter.post('/', authMiddleware, adminMiddleware, createProduct);
productRouter.put('/:id', authMiddleware, adminMiddleware, updateProduct);
productRouter.delete('/:id', authMiddleware, adminMiddleware, deleteProduct);

export default productRouter;
