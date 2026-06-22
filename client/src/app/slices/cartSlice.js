import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { apiRequest } from '../../services/api';
import { showNotification } from './uiSlice';

export const fetchCart = createAsyncThunk(
  'cart/fetch',
  async (_, { rejectWithValue }) => {
    try {
      return await apiRequest('/cart');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addToCart = createAsyncThunk(
  'cart/add',
  async (itemData, { dispatch, rejectWithValue }) => {
    try {
      const data = await apiRequest('/cart/add', {
        method: 'POST',
        body: JSON.stringify(itemData),
      });
      dispatch(showNotification({ type: 'success', message: 'Added to cart' }));
      return data;
    } catch (error) {
      dispatch(showNotification({ type: 'error', message: error.message }));
      return rejectWithValue(error.message);
    }
  }
);

export const updateCartItem = createAsyncThunk(
  'cart/update',
  async (itemData, { rejectWithValue }) => {
    try {
      return await apiRequest('/cart/update', {
        method: 'PUT',
        body: JSON.stringify(itemData),
      });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const clearCart = createAsyncThunk(
  'cart/clear',
  async (_, { rejectWithValue }) => {
    try {
      await apiRequest('/cart/clear', { method: 'DELETE' });
      return [];
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
      })
      .addCase(updateCartItem.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
      })
      .addCase(clearCart.fulfilled, (state) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
