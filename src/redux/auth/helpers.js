export const handleFulfilledAuthUser = (state, { payload }) => {
  state.user = payload.email;
  state.token = payload.idToken;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

export const handleFulfilledLogoutUser = (state) => {
  state.user = null;
  state.token = "";
  state.isLoggedIn = false;
};
