import { combineReducers } from "redux";
import calendar from "./calendar";
import login from "./login"
export default combineReducers({
  calendar,
  login,
});
