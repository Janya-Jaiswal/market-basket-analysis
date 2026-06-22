import express from 'express';
import {
  getCart,
  addToCart,
  updateCartItem,
  clearCart,
} from '../controllers/cart.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';

const cartRouter = express.Router();

cartRouter.use(authMiddleware);

cartRouter.get('/', getCart);
cartRouter.post('/add', addToCart);
cartRouter.put('/update', updateCartItem);
cartRouter.delete('/clear', clearCart);

export default cartRouter;
