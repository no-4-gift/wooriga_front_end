import * as challengerAPI from "../../apis/challengeAPI"
import {
    all,
    call,
    put,
    fork,
    takeEvery
  } from "redux-saga/effects";

  import {
    PICTUREFLAGTRUE,
    PICTUREFLAGFALSE,
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILED,

  } from "../modules/mychallengeDetail";
  
  function* certificationArray(action) {

    const {registeredId, uid} = action.payload;

    const certificationArray = yield call(
      challengerAPI.getDetail,
      registeredId,
      uid
    );

    try {
      if(certificationArray.certificationInfoArrayList[0].certificationTrue === 1){
        console.log("인증 완료", certificationArray.certificationInfoArrayList[0]);
        yield put({
          type : PICTUREFLAGTRUE,
          payload : {
            image : certificationArray.certificationInfoArrayList[0].certificationImage,
            date : certificationArray.certificationInfoArrayList[0].cardDate,
          }

      })
      }
      else {
        console.log("인증 안됌");
        yield put({
          type : PICTUREFLAGFALSE,
          payload : {
            date : certificationArray.certificationInfoArrayList[0].cardDate,
          }
      })
      }

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


  //---------------------------------------------
  
  function* watchCertificationArray() {
    yield takeEvery(GET_DETAIL, certificationArray);
  }



  //---------------------------------------
  
  export default function* userSaga() {
    yield all([
      fork(watchCertificationArray)
    ]);
  }