import { takeEvery, put, call } from "redux-saga/effects";

const SET_DATES = "challengeAdd/SET_DATES";
const SET_MEMBERS = "challengeAdd/SET_MEMBERS";
const SELECT_MEMBERS = "challengeAdd/SELECT_MEMBERS";
const SELECT_CHALLENGE = "challengeAdd/SELECT_CHALLENGE";
const TOGGLE_VISIBLE = "challengeAdd/TOGGLE_VISIBLE";
const SET_TEXT = "challengeAdd/SET_TEXT";
const ACTIVE_TOP_BUTTON = "challengeAdd/ACTIVE_TOP_BUTTON";

//ASYNC ACTION

const GET_DATA = "challengeAdd/GET_DATA";
const GET_DATA_SUCCESS = "challengeAdd/GET_DATA_SUCCESS";
const GET_DATA_ERROR = "challengeAdd/GET_DATA_ERROR";

export const setDates = dates => ({ type: SET_DATES, payload: dates });
export const setMembers = data => ({ type: SET_MEMBERS, payload: data });
export const selectMembers = id => ({ type: SELECT_MEMBERS, payload: id });
export const selectChallenge = id => ({ type: SELECT_CHALLENGE, payload: id });
export const toggleVisible = visible => ({
  type: TOGGLE_VISIBLE,
  payload: visible
});
export const setText = text => ({ type: SET_TEXT, payload: text });
export const setActiveTopButton = value => ({
  type: ACTIVE_TOP_BUTTON,
  payload: value
});

function* getDataSaga() {
  try {
    const response = yield call(); // () 안에 Promise Create 함수 넣어야함.

    yield put({
      type: GET_DATA_SUCCESS,
      payload: response
    });
  } catch (e) {
    yield put({
      type: GET_DATA_ERROR,
      payload: e,
      error: true
    });
  }
}

export function* ChallengeAddSaga() {
  yield takeEvery(GET_DATA, getDataSaga);
}

const initState = {
  members: [],
  dates: [],
  challengeId: -1,
  visible: false,
  text: "",
  activeTopButton: false,
  api: {
    loading: false,
    data: null,
    error: null
  }
};

function challengeAdd(state = initState, action) {
  switch (action.type) {
    case SET_DATES:
      return { ...state, dates: action.payload };
    case SET_MEMBERS:
      return {
        ...state,
        members: action.payload.map(elem => ({ ...elem, done: false }))
      };
    case SELECT_MEMBERS:
      return {
        ...state,
        members: state.members.map(elem =>
          elem.id === action.payload ? { ...elem, done: !elem.done } : elem
        )
      };
    case SELECT_CHALLENGE:
      return { ...state, challengeId: action.payload };
    case TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case SET_TEXT:
      return { ...state, text: action.payload };
    case ACTIVE_TOP_BUTTON:
      return { ...state, activeTopButton: action.payload };
    default:
      return state;
  }
}
export default challengeAdd;
