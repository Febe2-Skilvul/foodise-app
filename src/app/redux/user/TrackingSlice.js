import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  track: [],
  error: '',
};

export const trackingDay = createAsyncThunk(
  'data/trackingDay',
  async ({ day }) => {
    return axios
      .get(`https://o76ho3.deta.dev/tracking/today`)
      .then((res) => {
        return res.data;
      });
  }
);

const trackSlice = createSlice({
  name: 'track',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(trackingDay.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(trackingDay.fulfilled, (state, action) => {
      state.loading = false;
      state.track = action.payload;
      state.error = '';
    });
    builder.addCase(trackingDay.rejected, (state, action) => {
      state.loading = false;
      state.track = [];
      state.error = action.error.message;
    });
  },
});

export default trackSlice.reducer;
