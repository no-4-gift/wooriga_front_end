import * as challengerAPI from "../../apis/challengeAPI"
import {
    all,
    call,
    put,
    fork,
    takeEvery
  } from "redux-saga/effects";
//   import axios from "axios";
  import {
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILED,
    SUBMIT_TEXT,
    SUBMIT_TEXTSUCCESS,
    SUBMIT_TEXTFAILED
  } from "../modules/mychallengeDetail";
  
  // eslint-disable-next-line require-yield

  const submitTextAPI = async (res) => {
    console.log("res : ",res);
    const response = {data : res};
  return response.data;
}


  //--------------------------------------------------------
  
  function* certificationArray(action) {

    const {registeredId, uid} = action.payload;

    const certificationArray = yield call(
      challengerAPI.getDetail,
      registeredId,
      uid
    );
    try {

        yield put({
            type : GET_DETAIL_SUCCESS,
            payload : {
              certification : certificationArray
            }
        })

    } catch (e) {
      console.error(e);
      yield put({
        type : GET_DETAIL_FAILED,
        error: e
      });
    }
  }

  function* submitText(action) {

    const submitText = yield call(submitTextAPI, action.payload);
    console.log("submitText :", submitText);
    try {

        yield put({
            type : SUBMIT_TEXTSUCCESS,
            submitText
        })

    } catch (e) {
      console.error(e);
      yield put({
        type : SUBMIT_TEXTFAILED,
        error: e
      });
    }
  }

  //---------------------------------------------
  
  function* watchCertificationArray() {
    yield takeEvery(GET_DETAIL, certificationArray);
  }

  function* watchSubmitText() {
    yield takeEvery(SUBMIT_TEXT, submitText);
  }


  //---------------------------------------
  
  export default function* userSaga() {
    yield all([
      fork(watchCertificationArray),
      fork(watchSubmitText),
    ]);
  }