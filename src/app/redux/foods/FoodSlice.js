import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../service/api';

const initialState = {
  loading: false,
  foods: [],
  error: '',
};

export const fetchFoods = createAsyncThunk(
  'data/fetchFoods',
  async ({ query, token }) => {
    return axios
      .get(
        `https://foodise-back-end.deta.dev/foods/search?name=${query}`,
        {
          headers: {
            Authorization: `bearer ${token}`,
          },
        }
      )
      .then((res) => {
        return res.data;
      });
  }
);

const foodSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = '';
    });
    builder.addCase(fetchFoods.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default foodSlice.reducer;
