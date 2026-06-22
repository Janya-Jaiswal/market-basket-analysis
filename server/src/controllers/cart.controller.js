import {
  getCartService,
  addToCartService,
  updateCartItemQuantityService,
  clearCartService,
} from '../services/cart.service.js';

export const getCart = async (req, res) => {
  try {
    const cart = await getCartService(req.user.uid);
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const addToCart = async (req, res) => {
  try {
    const cart = await addToCartService(req.user.uid, req.body);
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const updateCartItem = async (req, res) => {
  try {
    const cart = await updateCartItemQuantityService(req.user.uid, req.body);
    res.status(200).json({ success: true, data: cart });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const clearCart = async (req, res) => {
  try {
    await clearCartService(req.user.uid);
    res.status(200).json({ success: true, message: 'Cart cleared successfully' });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};