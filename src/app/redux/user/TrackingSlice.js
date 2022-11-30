import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../service/api';

const initialState = {
  loading: false,
  track: [],
  error: '',
};

export const trackingDay = createAsyncThunk(
  'data/trackingDay',
  async (token) => {
    return axios
      .get(`https://foodise-back-end.deta.dev/tracking/today`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        return res;
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
