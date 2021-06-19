import { combineReducers } from "redux";
import meUser from "./reducers/meUser";
import allCandles from "./reducers/allCandles";
import candleDetails from "./reducers/candleDetails";

export default combineReducers({
  allCandles,
  meUser,
  candleDetails,
});
