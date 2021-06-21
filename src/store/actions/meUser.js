import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

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
