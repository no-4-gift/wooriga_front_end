import { combineReducers } from "redux";
import calendar from "./calendar";
import login from "./login";
import challengeAdd from "./challengeAdd";
import statics from "./statics";
export default combineReducers({
  calendar,
  login,
  statics,
  challengeAdd
});
