import { db } from '../config/db/connection.js';
import { createCartModel } from '../models/cart.model.js';

export const getCartService = async (userId) => {
  const cartDoc = await db.collection('carts').doc(userId).get();
  if (!cartDoc.exists) {
    const newCart = createCartModel({ userId });
    await db.collection('carts').doc(userId).set(newCart);
    return newCart;
  }
  return cartDoc.data();
};

export const addToCartService = async (userId, { productId, quantity }) => {
  const cartRef = db.collection('carts').doc(userId);
  const cartDoc = await cartRef.get();

  let items = [];
  if (cartDoc.exists) {
    items = cartDoc.data().items || [];
  }

  const existingItemIndex = items.findIndex(
    (item) => item.productId === productId
  );

  if (existingItemIndex > -1) {
    items[existingItemIndex].quantity += quantity;
  } else {
    items.push({ productId, quantity });
  }

  const updatedData = {
    items,
    updatedAt: new Date(),
  };

  if (!cartDoc.exists) {
    updatedData.userId = userId;
    updatedData.createdAt = new Date();
  }

  await cartRef.set(updatedData, { merge: true });
  return { userId, items };
};

export const updateCartItemQuantityService = async (
  userId,
  { productId, quantity }
) => {
  const cartRef = db.collection('carts').doc(userId);
  const cartDoc = await cartRef.get();

  if (!cartDoc.exists) throw new Error('Cart not found');

  let items = cartDoc.data().items || [];
  const existingItemIndex = items.findIndex(
    (item) => item.productId === productId
  );

  if (existingItemIndex > -1) {
    if (quantity <= 0) {
      items.splice(existingItemIndex, 1);
    } else {
      items[existingItemIndex].quantity = quantity;
    }
  } else {
    throw new Error('Item not found in cart');
  }

  await cartRef.update({ items, updatedAt: new Date() });
  return { userId, items };
};

export const clearCartService = async (userId) => {
  await db.collection('carts').doc(userId).update({
    items: [],
    updatedAt: new Date(),
  });
  return true;
};
