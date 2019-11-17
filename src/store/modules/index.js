import { combineReducers } from "redux";
import calendar, { CalendarSaga } from "./calendar";
import login from "./login";
import statics from "./statics";
import challengeAdd from "./challengeAdd";
import { all } from "redux-saga/effects";
import family, { FamilySaga } from "./family";

export default combineReducers({
  calendar,
  login,
  statics,
  challengeAdd,
  family
});

export function* rootSaga() {
  yield all([CalendarSaga(), FamilySaga()]);
}
