import { all, fork } from "redux-saga/effects";
import mychallengeDetail from "./mychallengeDetail";
import calendarRootSaga from "./calendar";
import { FamilySaga } from "./family";
import mychallenge from "./mychallenge"
// axios.defaults.baseURL = "";

export default function* rootSaga() {
  yield all([fork(mychallengeDetail), fork(mychallenge), calendarRootSaga(), FamilySaga()]);
}
