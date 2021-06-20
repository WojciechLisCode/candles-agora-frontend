const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "users/fetch":
      return action.payload;
    default:
      return state;
  }
}
