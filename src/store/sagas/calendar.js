import * as calendarAPI from "../../apis/calendarAPI";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  GET_CALENDAR_DATA,
  GET_CALENDAR_DATA_SUCCESS,
  GET_CALENDAR_DATA_ERROR
} from "../modules/calendar";

function* getCalendarDataSaga(action) {
  const { familyId, year, month } = action.payload;
  console.log(familyId);
  try {
    const { challengeBarInfo, emptyDayUserInfoArrayList } = yield call(
      calendarAPI.getCalendarData,
      familyId,
      year,
      month
    );
    yield put({
      type: GET_CALENDAR_DATA_SUCCESS,
      payload: {
        challengeBarInfo: challengeBarInfo,
        emptyDayUserInfoArrayList: emptyDayUserInfoArrayList
      }
    });
  } catch (e) {
    yield put({
      type: GET_CALENDAR_DATA_ERROR,
      payload: e
    });
  }
}

function* GetCalendarSaga() {
  yield takeEvery(GET_CALENDAR_DATA, getCalendarDataSaga);
}

export default function* calendarRootSaga() {
  yield all([GetCalendarSaga()]);
}
