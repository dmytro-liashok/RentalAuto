import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { toast } from "react-toastify";
import notifyOptions from "../../utils/notifyOptions";

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
        toast.success("Advert successfully added to favorites!", notifyOptions);
      } else {
        state.favorites.splice(existingIndex, 1);
        toast.success(
          "Advert successfully deleted from favorites!",
          notifyOptions
        );
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
