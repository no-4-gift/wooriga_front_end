import * as mypageAPI from "../../apis/mypageAPI";
import { all, call, put, takeEvery } from "redux-saga/effects";
import {
  CHANGE_LEADER,
  CHANGE_LEADER_SUCCESS,
  CHANGE_LEADER_ERROR,
  DELETE_MEMBER,
  DELETE_MEMBER_SUCCESS,
  DELETE_MEMBER_ERROR,
  POST_MYINFO_UPLOAD,
  POST_MYINFO_UPLOAD_SUCCESS,
  POST_MYINFO_UPLOAD_FAILED
} from "../modules/mypage";

//그룹장 변경
function* changeLeaderSaga(action) {
  const { familyId, uid, chiefId } = action.payload;
  try {
    const changeInfo = yield call(
      mypageAPI.changeLeader,
      familyId,
      uid,
      chiefId
    );
    console.log("사가까지 왔다아아아아아아아아앙아앙아아아앙");
    console.log(action.payload);
    console.log(changeInfo);
    yield put({
      type: CHANGE_LEADER_SUCCESS,
      payload: {
        changeloading: false,
        changeInfo: changeInfo
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: CHANGE_LEADER_ERROR,
      error: e,
      payload: {
        changeloading: false
      }
    });
  }
}

function* deleteMemberSaga(action) {
  const { uid } = action.payload;
  try {
    const deleteInfo = yield call(mypageAPI.deleteMember, uid);
    console.log("멤버삭제 사가까지 왔다아아아아아아아아앙아앙아아아앙");
    console.log(action.payload);
    console.log(deleteInfo);
    yield put({
      type: DELETE_MEMBER_SUCCESS,
      payload: {
        deleteloading: false,
        deleteInfo: deleteInfo
      }
    });
    console.log(deleteInfo);
  } catch (e) {
    console.error(e);
    yield put({
      type: DELETE_MEMBER_ERROR,
      error: e,
      payload: { deleteloading: false }
    });
  }
}

function* postMyInfo(action) {
  const {
    birth,
    color,
    email,
    familyId,
    name,
    file,
    relationship,
    uid
  } = action.payload;

  const info = yield call(
    mypageAPI.postMyInfo,
    birth,
    color,
    email,
    familyId,
    name,
    file,
    relationship,
    uid
  );

  try {
    yield put({
      type: POST_MYINFO_UPLOAD_SUCCESS,
      payload: {
        postloading: false,
        info: info
      }
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: POST_MYINFO_UPLOAD_FAILED,
      error: e,
      payload: {
        postloading: false
      }
    });
  }
}
function* PostMyInfo() {
  yield takeEvery(POST_MYINFO_UPLOAD, postMyInfo);
}

function* ChangeLeaderSaga() {
  yield takeEvery(CHANGE_LEADER, changeLeaderSaga);
}

function* DeleteMemberSaga() {
  yield takeEvery(DELETE_MEMBER, deleteMemberSaga);
}

export default function* mypageRootSaga() {
  yield all([ChangeLeaderSaga(), DeleteMemberSaga(), PostMyInfo()]);
}
