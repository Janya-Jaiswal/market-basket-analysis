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

export const getAllProductsService = async ({
  category,
  sortByPrice,
  page = 1,
  limit = 10,
}) => {
  let query = db.collection('products');

  // Filter by category if provided
  if (category) {
    query = query.where('category', '==', category);
  }

  // Sort by price if provided ('asc' or 'desc')
  if (sortByPrice === 'asc' || sortByPrice === 'desc') {
    query = query.orderBy('price', sortByPrice);
  } else {
    // Default fallback sort to maintain consistent pagination pagination
    query = query.orderBy('createdAt', 'desc');
  }

  // Get total count matching current filters
  const totalSnapshot = await query.get();
  const totalItems = totalSnapshot.size;

  // Manual pagination for combined where/orderBy queries in Firestore standard configurations
  const offset = (parseInt(page) - 1) * parseInt(limit);
  const snapshot = await query.get();

  const allDocs = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  const paginatedDocs = allDocs.slice(offset, offset + parseInt(limit));

  return {
    products: paginatedDocs,
    pagination: {
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalItems / parseInt(limit)),
      totalItems,
      limit: parseInt(limit),
    },
  };
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
