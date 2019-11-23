import * as commonAPI from "../../apis/commonAPI";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  GET_FAMILY,
  GET_FAMILY_SUCCESS,
  GET_FAMILY_ERROR
} from "../modules/family";

export function* getFamilyDataSaga(action) {
  const familyId = action.payload;
  try {
    const data = yield call(commonAPI.getFamily, familyId);
    yield put({
      type: GET_FAMILY_SUCCESS,
      payload: data
    });
  } catch (e) {
    yield put({
      type: GET_FAMILY_ERROR,
      payload: e
    });
  }
}

export function* FamilySaga() {
  yield takeEvery(GET_FAMILY, getFamilyDataSaga);
}
