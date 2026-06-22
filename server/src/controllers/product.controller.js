import {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
} from '../services/product.service.js';

export const createProduct = async (req, res) => {
  try {
    const product = await createProductService({
      ...req.body,
      createdBy: req.user.uid,
    });

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { category, sortByPrice, search, page } = req.query;

    const result = await getAllProductsService({
      category,
      sortByPrice,
      search,
      page,
      limit: 10,
    });

    res.json({
      success: true,
      data: result.products,
      pagination: result.pagination,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

export const getProduct = async (req, res) => {
  const product = await getProductByIdService(req.params.id);

  res.json({
    success: true,
    data: product,
  });
};

export const updateProduct = async (req, res) => {
  const product = await updateProductService(req.params.id, req.body);

  res.json({
    success: true,
    data: product,
  });
};

export const deleteProduct = async (req, res) => {
  await deleteProductService(req.params.id);

  res.json({
    success: true,
    message: 'Product deleted successfully',
  });
};
