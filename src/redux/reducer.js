import { combineReducers } from "@reduxjs/toolkit";
import { teachersApi } from "./teachers/teachers";
import { authSlice } from "./auth/slice";

export const reducer = combineReducers({
  [teachersApi.reducerPath]: teachersApi.reducer,
  [authSlice.reducerPath]: authSlice.reducer,
});
