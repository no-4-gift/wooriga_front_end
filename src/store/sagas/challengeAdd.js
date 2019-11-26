import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  POST_DATA,
  POST_DATA_SUCCESS,
  POST_DATA_ERROR,
  POST_CHALLENGE_REGIST,
  POST_CHALLENGE_REGIST_ERROR,
  POST_CHALLENGE_REGIST_SUCCESS
} from "../modules/challengeAdd";
import { ONMASKGROUP } from "../modules/statics";
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

function* postChallengeRegist(action) {
  const {
    participatntFK,
    challengeIdFK,
    chiefIdFK,
    familyId,
    resolution,
    registeredDate,
    history
  } = action.payload;
  try {
    yield call(
      challengeAddAPI.postChallengeRegist,
      participatntFK,
      challengeIdFK,
      chiefIdFK,
      familyId,
      resolution,
      registeredDate
    );
    yield put({
      type: POST_CHALLENGE_REGIST_SUCCESS
    });
    yield put({
      type: ONMASKGROUP
    });
    yield history.push("/");
  } catch (e) {
    yield put({
      type: POST_CHALLENGE_REGIST_ERROR,
      payload: e.message
    });
  }
}

function* PostChallengeRegistSaga() {
  yield takeEvery(POST_CHALLENGE_REGIST, postChallengeRegist);
}

export default function* challengeAddRootSaga() {
  yield all([PostDateListSaga(), PostChallengeRegistSaga()]);
}
