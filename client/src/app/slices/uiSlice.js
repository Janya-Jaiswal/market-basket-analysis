import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  notification: null, // { type: 'success' | 'error', message: string }
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    showNotification: (state, action) => {
      state.notification = action.payload;
    },
    clearNotification: (state) => {
      state.notification = null;
    },
  },
});

export const { setLoading, showNotification, clearNotification } =
  uiSlice.actions;
export default uiSlice.reducer;
