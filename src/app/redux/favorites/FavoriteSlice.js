import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  favorites: [],
  error: '',
};

export const fetchFavorite = createAsyncThunk(
  'data/fetchFavorite',
  async ({ token }) => {
    return axios
      .get(`https://foodise-back-end.deta.dev/favorites`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        return res.data;
      });
  }
);

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFavorite.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchFavorite.fulfilled, (state, action) => {
      state.loading = false;
      state.foods = action.payload;
      state.error = '';
    });
    builder.addCase(fetchFavorite.rejected, (state, action) => {
      state.loading = false;
      state.foods = [];
      state.error = action.error.message;
    });
  },
});

export default favoriteSlice.reducer;
