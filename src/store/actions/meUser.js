import axios from "axios";

import { selectToken } from "../selectors/meUser";

const apiUrl = "https://candles-agora.herokuapp.com/";

export const newCandleIdUpdate = (newCandleId) => ({
  type: "meUser/newCandleId",
  payload: newCandleId,
});

export const newCandleIdToZero = () => ({
  type: "meUser/newCandleIdToZero",
});

const loginSuccess = (userWithToken) => {
  return {
    type: "meUser/loginSuccess",
    payload: userWithToken,
  };
};

export const logOut = () => ({ type: "meUser/logOut" });

export const login = (email, password) => {
  return async (dispatch, getState) => {
    const response = await axios.post(`${apiUrl}/users/login`, {
      email,
      password,
    });
    dispatch(loginSuccess(response.data));
    console.log(response.data);
  };
};

const tokenStillValid = (userWithToken) => ({
  type: "meUser/fetchFromValidToken",
  payload: userWithToken,
});

export const getUserWithStoredToken = () => {
  return async (dispatch, getState) => {
    const token = selectToken(getState());
    if (token === null) return;
    try {
      const response = await axios.get(`${apiUrl}/myToken`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      dispatch(tokenStillValid(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.message);
      } else {
        console.log(error);
      }
      dispatch(logOut());
    }
  };
};

export const signup = (name, email, password, isArtist) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/users/signup`, {
        name,
        email,
        password,
      });
      dispatch(loginSuccess(response.data));
    } catch (error) {
      if (error.response) {
        console.log(error.response.data.message);
      } else {
        console.log(error.message);
      }
    }
  };
};
