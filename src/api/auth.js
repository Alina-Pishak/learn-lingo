import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY_FIREBASE;

axios.defaults.baseURL = `https://identitytoolkit.googleapis.com/v1`;

export const createUser = async (data) => {
  const dat = await axios.post(`/accounts:signUp?key=${API_KEY}`, {
    ...data,
  });
  return dat;
};

export const loginUser = (data) => {
  const dat = axios.post(`/accounts:signInWithPassword?key=${API_KEY}`, {
    ...data,
    returnSecureToken: true,
  });
  return dat;
};

export const getUser = (data) => {
  const dat = axios.get(`/accounts:lookup?key=${API_KEY}`, {
    ...data,
  });
  return dat;
};

// export const logoutUser = (data) => {
//   const dat = axios.post("", { ...data });
//   return dat;
// };
