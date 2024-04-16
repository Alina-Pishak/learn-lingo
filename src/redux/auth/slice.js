import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import {
  createUserThunk,
  getUserThunk,
  loginUserThunk,
  logoutUserThunk,
} from "./thunks";
import { handleFulfilledAuthUser } from "./helpers";

export const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) =>
    builder
      .addCase(createUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(loginUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(getUserThunk.fulfilled, handleFulfilledAuthUser)
      .addCase(logoutUserThunk.fulfilled),
});
