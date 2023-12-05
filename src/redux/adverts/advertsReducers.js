export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state) => {
  state.isLoading = false;
  state.error = true;
};

export const handleFulfilledGetAdverts = (state, { payload }) => {
  state.adverts = [...state.adverts, ...payload];
  state.lengthAdverts = payload.length;
  state.isLoading = false;
  state.error = null;
};

export const clearAdvertsReducer = (state) => {
  state.adverts = [];
  state.lengthAdverts = null;
};
