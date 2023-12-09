import { createSlice } from "@reduxjs/toolkit";
import { getAdverts, getAllAdverts } from "./advertsOperation";
import {
  clearAdvertsReducer,
  handleFulfilledGetAdverts,
  handleFulfilledGetAllAdverts,
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
    builder.addCase(getAllAdverts.pending, handlePending);
    builder.addCase(getAllAdverts.rejected, handleRejected);
    builder.addCase(getAllAdverts.fulfilled, handleFulfilledGetAllAdverts);
  },
});

export const advertsReducer = advertsSlice.reducer;
export const { clearAdverts } = advertsSlice.actions;
