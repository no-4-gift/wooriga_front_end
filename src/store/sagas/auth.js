import { call, put, takeEvery, all } from "redux-saga/effects";
import * as loginAPI from "../../apis/loginAPI";
import { ONLOGIN, ONLOGIN_SUCCESS, ONLOGIN_ERROR } from "../modules/auth";

function* kakaoLogin(action) {
  const token = action.payload;
  try {
    const res = yield call(loginAPI.kakaoLoginAPI, token);
    const { firstLogin, uid } = res;

    sessionStorage.setItem("uid", uid);

    yield put({
      type: ONLOGIN_SUCCESS,
      payload: {
        uid: uid,
        firstLogin: firstLogin
      }
    });
  } catch (e) {
    yield put({
      type: ONLOGIN_ERROR,
      payload: e
    });
  }
}

function* kakaoLoginSaga() {
  yield takeEvery(ONLOGIN, kakaoLogin);
}

export default function* rootAuthSaga() {
  yield all([kakaoLoginSaga()]);
}
