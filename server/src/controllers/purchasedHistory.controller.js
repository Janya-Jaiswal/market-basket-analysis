import {
  createPurchaseRecordService,
  getUserPurchaseHistoryService,
  getAllPurchaseHistoryAdminService,
} from '../services/purchasedHistory.service.js';

export const createCheckout = async (req, res) => {
  try {
    const record = await createPurchaseRecordService(req.user.uid, req.body);
    res.status(201).json({ success: true, data: record });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getUserHistory = async (req, res) => {
  try {
    const history = await getUserPurchaseHistoryService(req.user.uid);
    res.status(200).json({ success: true, data: history });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getAllHistoryAdmin = async (req, res) => {
  try {
    const history = await getAllPurchaseHistoryAdminService();
    res.status(200).json({ success: true, data: history });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
