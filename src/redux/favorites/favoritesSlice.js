import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const initialState = {
  favorites: [],
};

const persistConfig = {
  key: "favorite",
  storage,
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const existingIndex = state.favorites.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingIndex === -1) {
        state.favorites.push(action.payload);
      } else {
        state.favorites.splice(existingIndex, 1);
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
export const persistedFavoritessReducer = persistReducer(
  persistConfig,
  favoritesReducer
);
