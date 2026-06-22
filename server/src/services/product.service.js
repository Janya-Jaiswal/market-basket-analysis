import { db } from '../config/db/connection.js';
import { createProductModel } from '../models/product.model.js';

export const createProductService = async (product) => {
  const productData = createProductModel(product);

  const docRef = await db.collection('products').add(productData);

  return {
    id: docRef.id,
    ...productData,
  };
};

export const getAllProductsService = async () => {
  const snapshot = await db.collection('products').get();

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
};

export const getProductByIdService = async (id) => {
  const doc = await db.collection('products').doc(id).get();

  if (!doc.exists) {
    throw new Error('Product not found');
  }

  return {
    id: doc.id,
    ...doc.data(),
  };
};

export const updateProductService = async (id, body) => {
  await db
    .collection('products')
    .doc(id)
    .update({
      ...body,
      updatedAt: new Date(),
    });

  const updated = await db.collection('products').doc(id).get();

  return {
    id: updated.id,
    ...updated.data(),
  };
};

export const deleteProductService = async (id) => {
  await db.collection('products').doc(id).delete();

  return true;
};
