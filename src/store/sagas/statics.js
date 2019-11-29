import { call, put, takeEvery } from "redux-saga/effects";
import * as commonAPI from "../../apis/commonAPI";
import {
  GET_FAMILYID,
  GET_FAMILID_SUCCESS,
  GET_FAMILYID_ERROR
} from "../modules/statics";

function* getFamilyId(action) {
  try {
    const uid = action.payload;
    const res = yield call(commonAPI.getMain, uid);

    if (res.isFamily === 1) {
      sessionStorage.setItem("familyId", res.familyId);
    }

    yield put({
      type: GET_FAMILID_SUCCESS,
      payload: res
    });
  } catch (e) {
    yield put({
      type: GET_FAMILYID_ERROR,
      payload: e
    });
  }
}

export default function* getFamilyIdSaga() {
  yield takeEvery(GET_FAMILYID, getFamilyId);
}
