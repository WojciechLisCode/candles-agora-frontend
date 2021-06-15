import { combineReducers } from "redux";
import meUser from "./reducers/meUser";
import allCandles from "./reducers/allCandles";

export default combineReducers({
  allCandles,
  meUser,
});
