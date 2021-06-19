const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "candle/fetch":
      return action.payload;
    default:
      return state;
  }
}
