import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import api from '../../../service/api';

const initialState = {
  loading: false,
  foods: [],
  error: '',
};

export const filterFoods = createAsyncThunk(
  'data/filterFoods',
  async ({ category }) => {
    console.log(category);
    return api.get(`/foods/category/${category}`).then((res) => {
      return res.data;
    });
  }
);

const filterSlice = createSlice({
  name: 'food',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(filterFoods.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(filterFoods.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = '';
    });
    builder.addCase(filterFoods.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default filterSlice.reducer;
