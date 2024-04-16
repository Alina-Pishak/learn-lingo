export const handleFulfilledAuthUser = (state, { payload }) => {
  state.user = payload;
};

export const handleFulfilledLogoutUser = (state) => {
  state.user = null;
};
