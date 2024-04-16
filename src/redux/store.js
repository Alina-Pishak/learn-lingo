import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { teachersApi } from "./teachers/teachers";

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(teachersApi.middleware),
});

export default store;
