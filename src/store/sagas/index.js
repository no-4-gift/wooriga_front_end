import { all, fork } from "redux-saga/effects";
import mychallengeDetail from "./mychallengeDetail";
import calendarRootSaga from "./calendar";
import mychallenge from "./mychallenge";
import { FamilySaga } from "./family";
import challengeAddRootSaga from "./challengeAdd";
import rootAuthSaga from "./auth";
import getFamilyIdSaga from "./statics";
import makeGroupRootSaga from "./makeGroup";

export default function* rootSaga() {
  yield all([
    fork(mychallengeDetail),
    fork(mychallenge),
    calendarRootSaga(),
    FamilySaga(),
    challengeAddRootSaga(),
    rootAuthSaga(),
    getFamilyIdSaga(),
    makeGroupRootSaga()
  ]);
}
