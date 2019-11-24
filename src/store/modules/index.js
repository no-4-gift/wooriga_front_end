import { combineReducers } from "redux";
import calendar from "./calendar";
import login from "./login";
import statics from "./statics";
import challengeAdd from "./challengeAdd";
import myChallenge from "./mychallenge";
import family from "./family";

import mychallengeDetail from "./mychallengeDetail";

export default combineReducers({
  calendar,
  login,
  statics,
  challengeAdd,
  family,
  myChallenge,
  mychallengeDetail,
});
