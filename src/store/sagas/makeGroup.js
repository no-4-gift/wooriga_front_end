import { call, put, takeEvery, all } from "redux-saga/effects";
import * as makeGroupAPI from "../../apis/makeGroupAPI";
import {
  GET_MY_INFO,
  GET_FAMILY_INFO_SUCCESS,
  GET_MY_INFO_ERROR,
  GET_FAMILY_INFO,
  GET_FAMILY_INFO_ERROR,
  GET_MY_INFO_SUCCESS,
  OPEN_MAKE_GROUP_MODAL,
  OPEN_JOIN_GROUP_MODAL,
  PUT_CREATE_GROUP,
  PUT_CREATE_GROUP_SUCCESS,
  PUT_CREATE_GROUP_ERROR,
  PUT_JOIN_GROUP,
  PUT_JOIN_GROUP_SUCCESS,
  PUT_JOIN_GROUP_ERROR,
  CLOSE_MODAL
} from "../modules/makeGroup";

function* getMyInfo(action) {
  const uid = action.payload;
  try {
    const res = yield call(makeGroupAPI.getMyInfo, uid);
    yield put({
      type: GET_MY_INFO_SUCCESS,
      payload: res
    });
    yield put({ type: OPEN_MAKE_GROUP_MODAL });
  } catch (e) {
    yield put({
      type: GET_MY_INFO_ERROR,
      payload: e
    });
  }
}

function* getMyInfoSaga() {
  yield takeEvery(GET_MY_INFO, getMyInfo);
}

function* getFamilyInfo(action) {
  const { uid, code } = action.payload;
  try {
    const res = yield call(makeGroupAPI.getGroupInfo, uid, code);
    yield put({
      type: GET_FAMILY_INFO_SUCCESS,
      payload: res
    });
    yield put({ type: OPEN_JOIN_GROUP_MODAL });
  } catch (e) {
    yield put({
      type: GET_FAMILY_INFO_ERROR,
      payload: e
    });
  }
}

function* getFamilyInfoSaga() {
  yield takeEvery(GET_FAMILY_INFO, getFamilyInfo);
}

function* createGroup(action) {
  const { uid, color, relationShip, history } = action.payload;
  try {
    const res1 = yield call(makeGroupAPI.createGroup, uid);
    yield sessionStorage.setItem("familyId", res1.familyId);

    yield call(makeGroupAPI.joinGroup, uid, res1.familyId, color, relationShip);
    yield put({
      type: PUT_CREATE_GROUP_SUCCESS
    });
    yield put({ type: CLOSE_MODAL });
    yield window.location.reload();
  } catch (e) {
    yield put({
      type: PUT_CREATE_GROUP_ERROR,
      payload: e
    });
    yield put({ type: CLOSE_MODAL });
  }
}

function* createGroupSaga() {
  yield takeEvery(PUT_CREATE_GROUP, createGroup);
}

function* joinGroup(action) {
  const { uid, color, relationShip, familyId, history } = action.payload;
  try {
    const res = yield call(
      makeGroupAPI.joinGroup,
      uid,
      familyId,
      color,
      relationShip
    );
    yield sessionStorage.setItem("familyId", res.familyId);
    yield put({
      type: PUT_JOIN_GROUP_SUCCESS
    });
    yield put({ type: CLOSE_MODAL });
    yield window.location.reload();
  } catch (e) {
    yield put({
      type: PUT_JOIN_GROUP_ERROR,
      payload: e
    });
    yield put({ type: CLOSE_MODAL });
  }
}

function* joinGroupSaga() {
  yield takeEvery(PUT_JOIN_GROUP, joinGroup);
}

export default function* makeGroupRootSaga() {
  yield all([
    getMyInfoSaga(),
    getFamilyInfoSaga(),
    createGroupSaga(),
    joinGroupSaga()
  ]);
}
