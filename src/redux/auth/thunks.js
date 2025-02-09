import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, getUser, loginUser } from "../../api/auth";
import axios from "axios";

export const setToken = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const createUserThunk = createAsyncThunk(
  "auth/createUser",
  async (data) => {
    const response = await createUser(data);
    setToken.set(response.data.idToken);
    return response.data;
  }
);

export const loginUserThunk = createAsyncThunk(
  "auth/loginUser",
  async (data) => {
    const response = await loginUser(data);
    setToken.set(response.data.idToken);
    return response.data;
  }
);

export const getUserThunk = createAsyncThunk("auth/getUser", (data) =>
  getUser(data)
);

export const logoutUserThunk = createAsyncThunk("auth/logoutUser", (data) => {
  setToken.unset();
  return data;
});
