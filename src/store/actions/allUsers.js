import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:4000";

export const fetchUsersSuccess = (usersArray) => ({
  type: "users/fetch",
  payload: usersArray,
});

export const fetchAllUsers = (searchInput) => {
  return async (dispatch, getState) => {
    const response = await axios.get(
      `${apiUrl}/users?searchInput=${searchInput}`
    );
    dispatch(fetchUsersSuccess(response.data.users.rows));
  };
};

export const sendMessage = (message, senderName, senderId, reciverMail) => {
  return async (dispatch, getState) => {
    await axios.post(`${apiUrl}/users/send`, {
      message,
      senderName,
      senderId,
      reciverMail,
    });
  };
};

export const toggleAdmin = (id) => {
  return async (dispatch, getState) => {
    console.log(id);
    await axios.patch(`${apiUrl}/users/isAdmin/${id}`);
  };
};
