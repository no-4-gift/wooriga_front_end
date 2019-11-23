import { all, fork } from "redux-saga/effects";
// import axios from "axios";
import mychallengeDetail from "./mychallengeDetail";

import calendarRootSaga from "./calendar";
import { FamilySaga } from "./family";

// axios.defaults.baseURL = "";

export default function* rootSaga() {
  yield all([fork(mychallengeDetail), calendarRootSaga(), FamilySaga()]);
}
