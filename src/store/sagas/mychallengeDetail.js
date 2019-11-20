import {
    all,
    call,
    put,
    fork,
    takeEvery
  } from "redux-saga/effects";
//   import axios from "axios";
  import {
    SET_MEMBERS,
    SET_MEMBERSSUCCESS,
    SET_MEMBERSFAILED,
    SUBMIT_TEXT,
    SUBMIT_TEXTSUCCESS,
    SUBMIT_TEXTFAILED
  } from "../modules/mychallengeDetail";
  
  // eslint-disable-next-line require-yield
  const getMemberAPI = async (action) => {
      const response = {data : 1};
    return response.data;
  }
  
  const submitTextAPI = async (res) => {
    console.log("res : ",res);
    const response = {data : res};
  return response.data;
}


  //--------------------------------------------------------
  
  function* memberArray() {

    const memberArray = yield call(getMemberAPI);
    try {

        yield put({
            type : SET_MEMBERSSUCCESS,
            memberArray
        })

    } catch (e) {
      console.error(e);
      yield put({
        type : SET_MEMBERSFAILED,
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
  
  function* watchMemberArray() {
    yield takeEvery(SET_MEMBERS, memberArray);
  }

  function* watchSubmitText() {
    yield takeEvery(SUBMIT_TEXT, submitText);
  }


  //---------------------------------------
  
  export default function* userSaga() {
    yield all([
      fork(watchMemberArray),
      fork(watchSubmitText),
    ]);
  }