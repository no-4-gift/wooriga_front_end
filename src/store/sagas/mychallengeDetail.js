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
    
  } from "../modules/mychallengeDetail";
  
  // eslint-disable-next-line require-yield
  const getMemberAPI = async () => {
      const response = {data : 1}
    return response.data
  }
  

  //--------------------------------------------------------
  
  function* memberArray() {
    console.log("Hi~")
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

  //---------------------------------------------
  
  function* watchMemberArray() {
    yield takeEvery(SET_MEMBERS, memberArray);
  }

  //---------------------------------------
  
  export default function* userSaga() {
    yield all([
      fork(watchMemberArray),
    ]);
  }