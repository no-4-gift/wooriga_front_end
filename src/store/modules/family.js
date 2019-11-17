import * as commonAPI from "../../apis/commonAPI";
import { call, put, takeEvery } from "redux-saga/effects";

const GET_FAMILY = "family/GET_FAMILY";
const GET_FAMILY_SUCCESS = "famliy/GET_FAMILY_SUCCESS";
const GET_FAMILY_ERROR = "family/GET_FAMILY_ERROR";

export const getFamilyData = familyId => ({
  type: GET_FAMILY,
  payload: familyId
});

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

const initState = {
  loading: false,
  members: [],
  error: null
};

export default function family(state = initState, action) {
  switch (action.type) {
    case GET_FAMILY:
      return {
        ...state,
        loading: true
      };
    case GET_FAMILY_SUCCESS:
      return { ...state, loading: false, members: action.payload };
    case GET_FAMILY_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
