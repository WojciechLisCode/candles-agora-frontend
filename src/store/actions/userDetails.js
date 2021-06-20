import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const fetchUserSuccess = (userDetails) => ({
  type: "user/fetch",
  payload: userDetails,
});

export const fetchUserById = (id) => {
  return async (dispatch, getState) => {
    const response = await axios.get(`${apiUrl}/users/${id}`);
    dispatch(fetchUserSuccess(response.data.userDetails));
  };
};