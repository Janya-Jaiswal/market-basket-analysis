import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../services/api';

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (query = '', { rejectWithValue }) => {
    try {
      return await apiRequest(`/products${query}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await apiRequest(`/products/${id}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    singleProduct: null,
    pagination: null,
    loading: false,
    error: null,
  },
  reducers: {
    clearSingleProduct: (state) => {
      state.singleProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.products || action.payload;
        state.pagination = action.payload.pagination || null;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      });
  },
});

export const { clearSingleProduct } = productSlice.actions;
export default productSlice.reducer;
