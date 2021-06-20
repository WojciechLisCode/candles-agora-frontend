const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/fetch":
      return action.payload;
    default:
      return state;
  }
}
