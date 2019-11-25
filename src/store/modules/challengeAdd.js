const SET_DATES = "challengeAdd/SET_DATES";
const SET_MEMBERS = "challengeAdd/SET_MEMBERS";
const SELECT_MEMBERS = "challengeAdd/SELECT_MEMBERS";
const SELECT_CHALLENGE = "challengeAdd/SELECT_CHALLENGE";
const TOGGLE_VISIBLE = "challengeAdd/TOGGLE_VISIBLE";
const SET_TEXT = "challengeAdd/SET_TEXT";
const ACTIVE_TOP_BUTTON = "challengeAdd/ACTIVE_TOP_BUTTON";
const CLOSE_ERROR_MSG = "challengeAdd/CLOSE_ERROR_MSG";

//ASYNC ACTION

export const POST_DATA = "challengeAdd/POST_DATA";
export const POST_DATA_SUCCESS = "challengeAdd/POST_DATA_SUCCESS";
export const POST_DATA_ERROR = "challengeAdd/POST_DATA_ERROR";

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
export const closeErrorMsg = () => ({ type: CLOSE_ERROR_MSG });

//캘린더 => 챌린지 신청 페이지 넘어갈 때 호출 되는 액션
export const postDateListAndPath = (familyId, dateList, history) => ({
  type: POST_DATA,
  payload: {
    familyId: familyId,
    dateList: dateList,
    history: history
  }
});

//챌린지 신청 페이지 호출 액션
export const postDateList = (familyId, dateList) => ({
  type: POST_DATA,
  payload: {
    familyId: familyId,
    dateList: dateList,
    history: null
  }
});

const initState = {
  members: [],
  challengeList: [],
  dates: [],
  challengeId: -1,
  visible: false,
  text: "",
  activeTopButton: false,
  loading: false,
  error: null
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
    case CLOSE_ERROR_MSG:
      return { ...state, error: null };
    case POST_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        members: action.payload.members,
        challengeList: action.payload.challenges
      };
    case POST_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
export default challengeAdd;
