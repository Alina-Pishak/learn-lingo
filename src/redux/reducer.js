import { combineReducers } from "@reduxjs/toolkit";
import { teachersApi } from "./teachers/teachers";

export const reducer = combineReducers({
  [teachersApi.reducerPath]: teachersApi.reducer,
});
