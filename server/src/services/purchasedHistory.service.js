import { db } from '../config/db/connection.js';
import { createPurchaseHistoryModel } from '../models/purchasedHistroy.model.js';
import { clearCartService } from './cart.service.js';

export const createPurchaseRecordService = async (userId, checkoutData) => {
  const purchaseData = createPurchaseHistoryModel({
    userId,
    items: checkoutData.items,
    totalAmount: checkoutData.totalAmount,
    paymentDetails: checkoutData.paymentDetails,
    shippingAddress: checkoutData.shippingAddress,
  });

  const docRef = await db.collection('purchase_history').add(purchaseData);

  // Clear cart after checkout validation complete
  await clearCartService(userId);

  return {
    id: docRef.id,
    ...purchaseData,
  };
};

export const getUserPurchaseHistoryService = async (userId) => {
  const snapshot = await db
    .collection('purchase_history')
    .where('userId', '==', userId)
    .orderBy('purchasedAt', 'desc')
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getAllPurchaseHistoryAdminService = async () => {
  const snapshot = await db
    .collection('purchase_history')
    .orderBy('purchasedAt', 'desc')
    .get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};
