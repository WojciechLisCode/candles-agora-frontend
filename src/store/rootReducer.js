import { combineReducers } from "redux";
import meUser from "./reducers/meUser";
import allCandles from "./reducers/allCandles";
import candleDetails from "./reducers/candleDetails";
import allUsers from "./reducers/allUsers";

export default combineReducers({
  allCandles,
  allUsers,
  meUser,
  candleDetails,
});
