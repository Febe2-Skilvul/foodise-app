import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  recipes: [],
  error: '',
};

export const fetchRecipe = createAsyncThunk(
  'data/fetchRecipe',
  async ({ token }) => {
    return axios
      .get(`https://foodise-back-end.deta.dev/recipes`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchRecipe.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = '';
    });
    builder.addCase(fetchRecipe.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default recipeSlice.reducer;
