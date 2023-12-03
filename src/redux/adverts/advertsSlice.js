import { createSlice } from "@reduxjs/toolkit";
import { addAdverts, getAdverts } from "./advertsOperation";
import {
  handleFulfilledAddAdverts,
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
  extraReducers: (builder) => {
    builder.addCase(getAdverts.pending, handlePending);
    builder.addCase(getAdverts.rejected, handleRejected);
    builder.addCase(getAdverts.fulfilled, handleFulfilledGetAdverts);
    builder.addCase(addAdverts.pending, handlePending);
    builder.addCase(addAdverts.rejected, handleRejected);
    builder.addCase(addAdverts.fulfilled, handleFulfilledAddAdverts);
  },
});

export const advertsReducer = advertsSlice.reducer;
