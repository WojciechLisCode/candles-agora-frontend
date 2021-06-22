const initialState = {
  token: localStorage.getItem("token"),
  name: null,
  email: null,
  isAdmin: false,
  isBlocked: false,
  newCandleId: 3,
  id: 2,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "meUser/fetchFromValidToken":
      return { ...state, ...action.payload };
    case "meUser/logOut":
      localStorage.removeItem("token");
      return { ...initialState, token: null };
    case "meUser/loginSuccess":
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload);
      return { ...state, ...action.payload };
    case "meUser/newCandleId":
      return { ...state, newCandleId: action.payload };
    case "meUser/newCandleIdToZero":
      return { ...state, newCandleId: null };
    default:
      return state;
  }
}
