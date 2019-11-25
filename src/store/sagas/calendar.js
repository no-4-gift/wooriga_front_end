import * as calendarAPI from "../../apis/calendarAPI";
import { call, put, takeEvery, all } from "redux-saga/effects";
import {
  GET_CALENDAR_DATA,
  GET_CALENDAR_DATA_SUCCESS,
  GET_CALENDAR_DATA_ERROR,
  POST_EMPTY_DATE,
  POST_EMPTY_DATE_SUCCESS,
  POST_EMPTY_DATE_ERROR,
  DELETE_EMPTY_DATE,
  DELETE_EMPTY_DATE_SUCCESS,
  DELETE_EMPTY_DATE_ERROR
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

function* postEmptyDateSaga(action) {
  const { uid, date, familyId, dateInfo } = action.payload;
  console.log(dateInfo);
  try {
    const res = yield call(calendarAPI.postEmptySchedule, uid, date, familyId);
    console.log(res);
    yield put({
      type: POST_EMPTY_DATE_SUCCESS,
      payload: dateInfo
    });
  } catch (e) {
    yield put({
      type: POST_EMPTY_DATE_ERROR,
      payload: e
    });
  }
}

function* PostEmptyDateSaga() {
  yield takeEvery(POST_EMPTY_DATE, postEmptyDateSaga);
}

function* deleteEmptyDate(action) {
  const { uid, date, familyId, dateInfo } = action.payload;

  try {
    const res = yield call(
      calendarAPI.deleteEmptySchedule,
      uid,
      date,
      familyId
    );
    console.log(res);
    yield put({
      type: DELETE_EMPTY_DATE_SUCCESS,
      payload: dateInfo
    });
  } catch (e) {
    console.log(e.request);
    yield put({
      type: DELETE_EMPTY_DATE_ERROR,
      payload: e
    });
  }
}

function* DeleteEmptyDateSaga() {
  yield takeEvery(DELETE_EMPTY_DATE, deleteEmptyDate);
}

export default function* calendarRootSaga() {
  yield all([GetCalendarSaga(), PostEmptyDateSaga(), DeleteEmptyDateSaga()]);
}
