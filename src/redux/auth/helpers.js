export const handleFulfilledAuthUser = (state, { payload }) => {
  console.log(payload);
  // state.user.email = payload.email;
  state.user = payload.email;
  state.token = payload.idToken;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  // state.user.idToken = payload.data.idToken;
};

export const handleFulfilledLogoutUser = (state) => {
  state.user = null;
  state.token = "";
  state.isLoggedIn = false;
};
