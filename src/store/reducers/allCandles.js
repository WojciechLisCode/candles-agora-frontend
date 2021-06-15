// import {} from "./actions";

const initialState = null;

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "candles/fetch":
      return action.payload;
    default:
      return state;
  }
}
