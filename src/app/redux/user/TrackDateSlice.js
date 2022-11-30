import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../service/api';

const initialState = {
  loading: false,
  track: [],
  error: '',
};

export const trackDate = createAsyncThunk(
  'data/trackDate',
  async ({ date, token }) => {
    console.log('tok', token);
    return axios
      .get(`https://foodise-back-end.deta.dev/tracking/${date}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        return res;
      });
  }
);

const trackDateSlice = createSlice({
  name: 'track',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(trackDate.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(trackDate.fulfilled, (state, action) => {
      state.loading = false;
      state.track = action.payload;
      state.error = '';
    });
    builder.addCase(trackDate.rejected, (state, action) => {
      state.loading = false;
      state.track = [];
      state.error = action.error.message;
    });
  },
});

export default trackDateSlice.reducer;
