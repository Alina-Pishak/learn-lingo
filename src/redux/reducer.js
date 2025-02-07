import { combineReducers } from "@reduxjs/toolkit";
import { teachersApi } from "./teachers/teachers";
import { authSlice } from "./auth/slice";
import { favoritesReducer } from "./favorites/favorites";

export const reducer = combineReducers({
  [teachersApi.reducerPath]: teachersApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
  favorites: favoritesReducer,
});
