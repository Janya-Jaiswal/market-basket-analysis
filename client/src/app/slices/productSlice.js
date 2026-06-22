// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { apiRequest } from '../../services/api';

// export const fetchProducts = createAsyncThunk(
//   'products/fetchAll',
//   async (query = '', { rejectWithValue }) => {
//     try {
//       return await apiRequest(`/products${query}`);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchProductById = createAsyncThunk(
//   'products/fetchById',
//   async (id, { rejectWithValue }) => {
//     try {
//       return await apiRequest(`/products/${id}`);
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// const productSlice = createSlice({
//   name: 'products',
//   initialState: {
//     items: [],
//     singleProduct: null,
//     pagination: null,
//     loading: false,
//     error: null,
//   },
//   reducers: {
//     clearSingleProduct: (state) => {
//       state.singleProduct = null;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchProducts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.items = action.payload.products || action.payload;
//         state.pagination = action.payload.pagination || null;
//       })
//       .addCase(fetchProducts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })
//       .addCase(fetchProductById.pending, (state) => {
//         state.loading = true;
//       })
//       .addCase(fetchProductById.fulfilled, (state, action) => {
//         state.loading = false;
//         state.singleProduct = action.payload;
//       });
//   },
// });

// export const { clearSingleProduct } = productSlice.actions;
// export default productSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { apiRequest } from '../../services/api';

// --- EXISTING THUNKS ---
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

// --- NEW ADMIN THUNKS ---
export const createProduct = createAsyncThunk(
  'products/create',
  async (productData, { rejectWithValue }) => {
    try {
      const data = await apiRequest('/products', {
        method: 'POST',
        body: JSON.stringify(productData),
      });
      toast.success('Product created successfully!');
      return data;
    } catch (error) {
      toast.error(error.message || 'Failed to create product');
      return rejectWithValue(error.message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'products/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const updated = await apiRequest(`/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      });
      toast.success('Product updated successfully!');
      return updated;
    } catch (error) {
      toast.error(error.message || 'Failed to update product');
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'products/delete',
  async (id, { rejectWithValue }) => {
    try {
      await apiRequest(`/products/${id}`, { method: 'DELETE' });
      toast.success('Product deleted successfully!');
      return id; // Return ID so we can filter it out of the state
    } catch (error) {
      toast.error(error.message || 'Failed to delete product');
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
      // Fetch All
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

      // Fetch Single
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.singleProduct = action.payload;
      })

      // Admin: Create Product
      .addCase(createProduct.fulfilled, (state, action) => {
        state.items.unshift(action.payload); // Add new item to the top of the list
      })

      // Admin: Update Product
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.items.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })

      // Admin: Delete Product
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.items = state.items.filter((p) => p.id !== action.payload);
      });
  },
});

export const { clearSingleProduct } = productSlice.actions;
export default productSlice.reducer;
