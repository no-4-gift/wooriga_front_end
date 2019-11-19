import { all, fork } from "redux-saga/effects";
// import axios from "axios";
import mychallengeDetail from "./mychallengeDetail";

// axios.defaults.baseURL = "";

export default function* rootSaga() {
  yield all([fork(mychallengeDetail)]);

}