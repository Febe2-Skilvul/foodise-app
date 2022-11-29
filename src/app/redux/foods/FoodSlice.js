import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  foods: [],
  error: '',
};

export const fetchFoods = createAsyncThunk(
  'data/fetchFoods',
  async ({ query }) => {
    console.log(query);
    return axios
      .get(`https://o76ho3.deta.dev/foods/search?name=${query}`)
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