// import {} from "./actions";

const initialState = {
  token: localStorage.getItem("token"),
  name: "Wojtek",
  email: null,
  isAdmin: true,
  isBlocked: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
