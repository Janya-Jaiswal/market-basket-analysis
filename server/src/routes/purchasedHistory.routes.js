import express from 'express';
import {
  createCheckout,
  getUserHistory,
  getAllHistoryAdmin,
} from '../controllers/purchasedHistory.controller.js';
import authMiddleware from '../middleware/auth.middleware.js';
import adminMiddleware from '../middleware/admin.middleware.js';

const purchaseRouter = express.Router();

purchaseRouter.use(authMiddleware);

purchaseRouter.post('/checkout', createCheckout);
purchaseRouter.get('/history', getUserHistory);
purchaseRouter.get('/admin/all', adminMiddleware, getAllHistoryAdmin);

export default purchaseRouter;
