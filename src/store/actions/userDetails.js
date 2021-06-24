import axios from "axios";

const apiUrl = "https://candles-agora.herokuapp.com/";

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

export const deleteConnection = (connectionType, connectionId) => {
  return async (dispatch, getState) => {
    const response = await axios.delete(
      `${apiUrl}/candles/deleteConnection/${connectionType}/${connectionId}`
    );
    console.log(response);
  };
};
