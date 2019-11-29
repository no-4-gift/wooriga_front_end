import { combineReducers } from "redux";
import calendar from "./calendar";
import auth from "./auth";
import statics from "./statics";
import challengeAdd from "./challengeAdd";
import mypage from "./mypage";
import family from "./family";

import mychallengeDetail from "./mychallengeDetail";
import mychallenge from "./mychallenge";
import makeGroup from "./makeGroup";

export default combineReducers({
  calendar,
  auth,
  statics,
  challengeAdd,
  family,
  mychallengeDetail,
  mypage,
  mychallenge,
  makeGroup
});
