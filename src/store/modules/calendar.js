import moment from "moment";

//캘린더 빈 일정 챌린지 일정 API
export const GET_CALENDAR_DATA = "calendar/GET_CALENDAR_DATA";
export const GET_CALENDAR_DATA_SUCCESS = "calendar/GET_CALENDAR_DATA_SUCCESS";
export const GET_CALENDAR_DATA_ERROR = "calendar/GET_CALENDAR_DATA_ERROR";

//빈 일정 추가 및 삭제
export const POST_EMPTY_DATE = "calendar/POST_EMPTY_DATE";
export const POST_EMPTY_DATE_SUCCESS = "calendar/POST_EMPTY_DATE_SUCCESS";
export const POST_EMPTY_DATE_ERROR = "calendar/POST_EMPTY_DATE_ERROR";

export const DELETE_EMPTY_DATE = "calendar/DELETE_EMPTY_DATE";
export const DELETE_EMPTY_DATE_SUCCESS = "calendar/DELETE_EMPTY_DATE_SUCCESS";
export const DELETE_EMPTY_DATE_ERROR = "calendar/DELETE_EMPTY_DATE_ERROR";

export const getCalendarData = (familyId, year, month) => ({
  type: GET_CALENDAR_DATA,
  payload: {
    familyId: familyId,
    year: year,
    month: month
  }
});

export const postEmptyDate = (uid, date, familyId, dateInfo) => ({
  type: POST_EMPTY_DATE,
  payload: {
    uid: uid,
    date: date,
    familyId: familyId,
    dateInfo: dateInfo
  }
});

export const deleteEmptyDate = (uid, date, familyId, dateInfo) => ({
  type: DELETE_EMPTY_DATE,
  payload: {
    uid: uid,
    date: date,
    familyId: familyId,
    dateInfo: dateInfo
  }
});

//달력 Actions
const PRE_MONTH = "calendar/PRE_MONTH"; //저번 달로 이동
const NEXT_MONTH = "calendar/NEXT_MONTH"; //다음 달로 이동
const GO_TO_CURRENT_DAY = "calendar/GO_TO_CURRENT_DAY"; //오늘 날짜 달력으로 이동
const OPEN_MODAL = "calendar/OPEN_MODAL"; //모달 창 열기
const CLOSE_MODAL = "calendar/CLOSE_MODAL"; //모달 창 닫기
const TOGGLE = "calendar/TOGGLE"; // 날짜 선택 버튼 활성화 및 비활성화
const SELECT_CHALLENGE_DATES = "calendar/SELECT_CHALLENGE_DATES"; //챌린지 일정 선택
const ALERT = "calendar/ALERT";
const CLOSE_EDIT_ERROR = "calendar/CLOSE_EDIT_ERROR"; //빈 일정 등록 및 삭제 실패 알림창 닫기
const ADD_VIEWED_DAY = "calendar/ADD_VIEWED_DAY"; // 봤던 날짜들 등록
export const INTI_CALENDAR = "calendar/INTI_CALENDAR"; // 캘린더 state 배열들 모두 비우기

//달력 Actions Creator
export const goPreMonth = () => ({ type: PRE_MONTH });
export const goNextMonth = () => ({ type: NEXT_MONTH });
export const goCurMonth = moment => ({
  type: GO_TO_CURRENT_DAY,
  payload: moment
});

export const openModal = date => ({ type: OPEN_MODAL, payload: date });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const toggle = () => ({ type: TOGGLE });
export const selectChallengeDates = date => ({
  type: SELECT_CHALLENGE_DATES,
  payload: date
});

export const alert = flag => ({ type: ALERT, payload: flag });

export const closeEditErrorAlert = () => ({ type: CLOSE_EDIT_ERROR });

export const addViewedDays = date => ({ type: ADD_VIEWED_DAY, payload: date });
export const initCalendar = () => ({ type: INTI_CALENDAR });
let momentToday = moment();

const MaxChallengeDateLength = 10;

//초기 상태 정의
const initialState = {
  loading: false,
  error: null,
  challengeBarInfo: [],
  dates: [],
  challengeDates: [],
  viewedDay: [],
  today: momentToday,
  visible: false,
  toggle: false,
  selectDate: null,
  alert: false,
  editDateError: null
};

//달력 Reducer
export default function calendar(state = initialState, action) {
  switch (action.type) {
    case INTI_CALENDAR:
      return initialState;
    case PRE_MONTH:
      return {
        ...state,
        today: state.today.clone().add(-1, "month")
      };
    case NEXT_MONTH:
      return {
        ...state,
        today: state.today.clone().add(1, "month")
      };
    case GO_TO_CURRENT_DAY:
      return {
        ...state,
        today: action.payload
      };

    case OPEN_MODAL:
      return {
        ...state,
        visible: true,
        selectDate: action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        selectDate: null
      };
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
        challengeDates: []
      };
    case SELECT_CHALLENGE_DATES:
      return {
        ...state,
        challengeDates:
          state.challengeDates.findIndex(elem => elem === action.payload) === -1
            ? state.challengeDates.length < MaxChallengeDateLength
              ? state.challengeDates.concat(action.payload)
              : state.challengeDates
            : state.challengeDates.filter(elem => elem !== action.payload)
      };
    case ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case ADD_VIEWED_DAY:
      return {
        ...state,
        viewedDay: state.viewedDay.concat(action.payload)
      };
    case GET_CALENDAR_DATA:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_CALENDAR_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        challengeBarInfo:
          state.challengeBarInfo.length > 0
            ? state.challengeBarInfo.concat(action.payload.challengeBarInfo)
            : action.payload.challengeBarInfo,
        dates:
          state.dates.length > 0
            ? state.dates.concat(action.payload.emptyDayUserInfoArrayList)
            : action.payload.emptyDayUserInfoArrayList
      };
    case GET_CALENDAR_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case POST_EMPTY_DATE:
      return {
        ...state,
        loading: true,
        editDateError: null
      };
    case POST_EMPTY_DATE_SUCCESS:
      return {
        ...state,
        loading: false,
        visible: false,
        dates: state.dates.concat(action.payload)
      };
    case POST_EMPTY_DATE_ERROR:
      return {
        ...state,
        loading: false,
        visible: false,
        editDateError: action.payload
      };
    case CLOSE_EDIT_ERROR:
      return {
        ...state,
        editDateError: null
      };
    case DELETE_EMPTY_DATE:
      return {
        ...state,
        loading: true
      };
    case DELETE_EMPTY_DATE_SUCCESS: {
      const { emptyDate, userInfo } = action.payload;
      const temp1 = state.dates.filter(
        elem => elem.userInfo.uid !== userInfo.uid
      );
      const temp2 = state.dates
        .filter(elem => elem.userInfo.uid === userInfo.uid)
        .filter(elem => elem.emptyDate !== emptyDate);

      return {
        ...state,
        loading: false,
        visible: false,
        dates: temp1.concat(temp2)
      };
    }
    case DELETE_EMPTY_DATE_ERROR:
      return {
        ...state,
        loading: false,
        visible: false,
        editDateError: action.payload
      };
    default:
      return state;
  }
}
