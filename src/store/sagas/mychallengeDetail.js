import * as challengerAPI from "../../apis/challengeAPI"
import {
    all,
    call,
    put,
    fork,
    takeEvery,
    delay,
  } from "redux-saga/effects";

  import {
    PICTUREFLAGTRUE,
    PICTUREFLAGFALSE,
    GET_DETAIL,
    GET_DETAIL_SUCCESS,
    GET_DETAIL_FAILED,
    POST_PICTURE_UPLOAD,
    POST_PICTURE_UPLOAD_SUCCESS,
    POST_PICTURE_UPLOAD_FAILED,
    PUT_PICTURE_DELETE,
    PUT_PICTURE_DELETE_SUCCESS,
    PUT_PICTURE_DELETE_FAILED
  } from "../modules/mychallengeDetail";

  import moment from 'moment';

  let TodayTime = moment().format("YYYY.MM.DD");
 
  let TodayDateFormat = new Date().toISOString().substring(0, 10);
  function* certificationArray(action) {

    const {registeredId, uid} = action.payload;

    const certificationArray = yield call(
      challengerAPI.getDetail,
      registeredId,
      uid
    );

    let certificationImage, certificationDate, certificationFlag;
    
    try {
  
      certificationImage = certificationArray.certificationInfoArrayList[0].certificationImage;
      certificationDate = certificationArray.certificationInfoArrayList[0].cardDate;
      certificationFlag = certificationArray.certificationInfoArrayList[0].certificationTrue

      for(let i = 0 ; i < certificationArray.certificationInfoArrayList.length ; i++){
        if (certificationArray.certificationInfoArrayList[i].cardDate === TodayTime){

          certificationImage = certificationArray.certificationInfoArrayList[i].certificationImage;
          certificationDate = certificationArray.certificationInfoArrayList[i].cardDate;
          certificationFlag = certificationArray.certificationInfoArrayList[i].certificationTrue
        }
      }
      
      if(certificationFlag === 1){
        // console.log("인증 완료", certificationArray.certificationInfoArrayList);
        yield put({
          type : PICTUREFLAGTRUE,
          payload : {
            image : certificationImage,
            date : certificationDate,
          }

      })
      }
      else {
        // console.log("인증 안됌");
        yield put({
          type : PICTUREFLAGFALSE,
          payload : {
            date : certificationDate,
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

function* postCertification(action) {

  const {registeredFk, date, file} = action.payload;
  console.log(registeredFk, date, file);

  const certification = yield call(
    challengerAPI.postCertification,
    registeredFk,
    TodayDateFormat,
    file
  );

  try {

      yield put({
          type : POST_PICTURE_UPLOAD_SUCCESS,
          payload : {
            postLoading : false,
            certification : certification
          }
      })

  } catch (e) {
    console.error(e);
    yield put({
      type : POST_PICTURE_UPLOAD_FAILED,
      error: e,
      payload : {
        postLoading : false
      }
    });
  }
}


function* deleteCertification(action) {

  const {registeredId, date} = action.payload;
  console.log(registeredId, date)
  const certification = yield call(
    challengerAPI.deleteCertification,
    registeredId,
    TodayDateFormat
  );
  yield delay(3000)
  try {

      yield put({
          type : PUT_PICTURE_DELETE_SUCCESS,
          payload : {
            deleteLoading : false,
            certification : certification
          }
      })

  } catch (e) {
    console.error(e);
    yield put({
      type : PUT_PICTURE_DELETE_FAILED,
      error: e,
      payload : {
        deleteLoading : false
      }
    });
  }
}
  //---------------------------------------------
  
function* watchCertificationArray() {
  yield takeEvery(GET_DETAIL, certificationArray);
}

function* watchPostCertification() {
  yield takeEvery(POST_PICTURE_UPLOAD, postCertification);
}

function* watchDeleteCertification() {
  yield takeEvery(PUT_PICTURE_DELETE, deleteCertification);
}


  //---------------------------------------
  
  export default function* userSaga() {
    yield all([
      fork(watchCertificationArray),
      fork(watchPostCertification),
      fork(watchDeleteCertification)
    ]);
  }