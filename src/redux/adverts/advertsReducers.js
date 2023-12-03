export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state) => {
  state.isLoading = false;
  state.error = true;
};

export const handleFulfilled = (state, { payload }) => {
  state.adverts = [...state.adverts, ...payload];
  state.isLoading = false;
  state.error = null;
};
