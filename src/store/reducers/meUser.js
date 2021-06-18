const initialState = {
  token: localStorage.getItem("token"),
  name: "Wojtek",
  email: null,
  isAdmin: true,
  isBlocked: false,
  newCandleId: 3,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "meUser/newCandleId":
      console.log(action.payload);
      return { ...state, newCandleId: action.payload };
    default:
      return state;
  }
}
