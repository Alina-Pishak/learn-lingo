import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, getUser, loginUser, logoutUser } from "../../api/auth";

export const createUserThunk = createAsyncThunk("auth/createUser", (data) =>
  createUser(data)
);

export const loginUserThunk = createAsyncThunk("auth/loginUser", (data) =>
  loginUser(data)
);

export const getUserThunk = createAsyncThunk("auth/getUser", (data) =>
  getUser(data)
);

export const logoutUserThunk = createAsyncThunk("auth/logoutUser", (data) =>
  logoutUser(data)
);
