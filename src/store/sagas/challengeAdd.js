import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  POST_DATA,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR
} from "../modules/challengeAdd";
import { INTI_CALENDAR } from "../modules/calendar";
import * as challengeAddAPI from "../../apis/challengeAddAPI";
import { makeQueryDates } from "../../utils/makeQueryDates";

function* postDateList(action) {
  const { familyId, dateList, history } = action.payload;
  try {
    const { challenges, userInfo } = yield call(
      challengeAddAPI.postChallengeDateList,
      familyId,
      dateList
    ); // () 안에 Promise Create 함수 넣어야함.

    yield put({
      type: POST_DATA_SUCCESS,
      payload: {
        challenges: challenges,
        members: userInfo
      }
    });

    if (history !== null) {
      yield put({ type: INTI_CALENDAR });
      const query = makeQueryDates(dateList);
      yield history.push(`/challenge_regist?${query}`);
    }
  } catch (e) {
    console.log(e);
    yield put({
      type: POST_DATA_ERROR,
      payload: e
    });
  }
}

function* PostDateListSaga() {
  yield takeEvery(POST_DATA, postDateList);
}

export default function* challengeAddRootSaga() {
  yield all([PostDateListSaga()]);
}
