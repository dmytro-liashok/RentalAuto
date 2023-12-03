import { createSlice } from "@reduxjs/toolkit";
import { getAdverts } from "./advertsOperation";
import {
  handleFulfilled,
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
  extraReducers: (builder) => {
    builder.addCase(getAdverts.pending, handlePending);
    builder.addCase(getAdverts.rejected, handleRejected);
    builder.addCase(getAdverts.fulfilled, handleFulfilled);
  },
});

export const advertsReducer = advertsSlice.reducer;
