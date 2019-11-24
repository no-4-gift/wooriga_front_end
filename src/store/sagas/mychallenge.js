import * as challengerAPI from "../../apis/challengeAPI";
import {all, call, put, takeEvery } from "redux-saga/effects";

import {
GETCHALLENGER,
GETPARTICIPATION,
GETCHALLENGER_SUCCESS,
GETPARTICIPATION_SUCCESS,
GETCHALLENGER_ERROR,
GETPARTICIPATION_ERROR
} from "../modules/mychallenge";
  
  function* getChallengerDataSaga(action) {

    const {familyId, uid} = action.payload

    try {
    const challengerInfo = yield call(
        challengerAPI.getChallenger,
        familyId,
        uid,
    );

    yield put({
      type: GETCHALLENGER_SUCCESS,
      payload: {
        challengerInfo: challengerInfo,
      }
    });
  } catch (e) {
    yield put({
      type: GETCHALLENGER_ERROR,
      payload: e
    });
  }
}
  
    function* getParticipationDataSaga(action){

    const {familyId, uid} = action.payload

    try {
    const participationInfo = yield call(
        challengerAPI.getParticipation,
        familyId,
        uid,
    );
    yield put({
      type: GETPARTICIPATION_SUCCESS,
      payload: {
        participationInfo: participationInfo,
      }
    });
  } catch (e) {
    yield put({
      type: GETPARTICIPATION_ERROR,
      payload: e
    });
  }
}


  //--------------------------------------------------------
  function* GetChallengerSaga() {
    yield takeEvery(GETCHALLENGER, getChallengerDataSaga);
  }
  
  function* GetParticipationSaga() {
    yield takeEvery(GETPARTICIPATION, getParticipationDataSaga);
  }
  
  export default function* challengeRootSaga() {
    yield all([GetChallengerSaga(), GetParticipationSaga()]);
  }