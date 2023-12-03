export const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleRejected = (state) => {
  state.isLoading = false;
  state.error = true;
};

export const handleFulfilledGetAdverts = (state, { payload }) => {
  state.adverts = payload;
  state.lengthAdverts = payload.length;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledAddAdverts = (state, { payload }) => {
  state.adverts.push(...payload);
  state.lengthAdverts = payload.length;
  state.isLoading = false;
  state.error = null;
};
