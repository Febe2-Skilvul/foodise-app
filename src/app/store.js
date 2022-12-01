import { configureStore } from '@reduxjs/toolkit';
import foodsReducer from './redux/foods/FoodSlice';
import filterReducer from './redux/foods/FilterSlice';
import trackReducer from './redux/user/TrackingSlice';
import trackingDateReducer from './redux/user/TrackDateSlice';
import recipesReducer from './redux/recipes/RecipeSlice';

export const store = configureStore({
  reducer: {
    list: foodsReducer,
    filter: filterReducer,
    track: trackReducer,
    trackDate: trackingDateReducer,
    recipes: recipesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
