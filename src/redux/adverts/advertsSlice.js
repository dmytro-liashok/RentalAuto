import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./advertsOperation";
import {
  clearAdvertsReducer,
  handleFulfilledGetAdverts,
  handlePending,
  handleRejected,
} from "./advertsReducers";

const initialState = {
  adverts: [],
  isLoading: false,
  error: null,
  lengthAdverts: null,
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    clearAdverts: clearAdvertsReducer,
  },
  extraReducers: (builder) => {
    builder.addCase(getAdverts.pending, handlePending);
    builder.addCase(getAdverts.rejected, handleRejected);
    builder.addCase(getAdverts.fulfilled, handleFulfilledGetAdverts);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { clearAdverts } = advertsSlice.actions;
