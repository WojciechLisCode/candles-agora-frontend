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
    console.log(response.data.users.rows);
    dispatch(fetchUsersSuccess(response.data.users.rows));
  };
};
