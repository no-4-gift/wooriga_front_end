import moment from "moment";

export const GET_CALENDAR_DATA = "calendar/GET_CALENDAR_DATA";
export const GET_CALENDAR_DATA_SUCCESS = "calendar/GET_CALENDAR_DATA_SUCCESS";
export const GET_CALENDAR_DATA_ERROR = "calendar/GET_CALENDAR_DATA_ERROR";

export const getCalendarData = (familyId, year, month) => ({
  type: GET_CALENDAR_DATA,
  payload: {
    familyId: familyId,
    year: year,
    month: month
  }
});

//달력 Actions
const PRE_MONTH = "calendar/PRE_MONTH"; //저번 달로 이동
const NEXT_MONTH = "calendar/NEXT_MONTH"; //다음 달로 이동
const GO_TO_CURRENT_DAY = "calendar/GO_TO_CURRENT_DAY"; //오늘 날짜 달력으로 이동
const INSERT_SCHEDULE = "calendar/INSERT_SCHEDULE"; //일정 추가
const DELETE_SCHEDULE = "calendar/DELETE_SCHEDULE"; //일정 삭제
const OPEN_MODAL = "calendar/OPEN_MODAL"; //모달 창 열기
const CLOSE_MODAL = "calendar/CLOSE_MODAL"; //모달 창 닫기
const TOGGLE = "calendar/TOGGLE"; // 날짜 선택 버튼 활성화 및 비활성화
const SELECT_CHALLENGE_DATES = "calendar/SELECT_CHALLENGE_DATES"; //챌린지 일정 선택
const GO_TO_CHALLENGE = "calendar/GO_TO_CHALLENGE"; //챌린지 신청 페이지로 이동
const ALERT = "calendar/ALERT";

//달력 Actions Creator
export const goPreMonth = () => ({ type: PRE_MONTH });
export const goNextMonth = () => ({ type: NEXT_MONTH });
export const goCurMonth = moment => ({
  type: GO_TO_CURRENT_DAY,
  payload: moment
});

//dateinfo = {id, name, color, date}
export const insertSchedule = dateinfo => ({
  type: INSERT_SCHEDULE,
  payload: dateinfo
});
export const deleteSchedule = dateinfo => ({
  type: DELETE_SCHEDULE,
  payload: dateinfo
});
export const openModal = date => ({ type: OPEN_MODAL, payload: date });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const toggle = () => ({ type: TOGGLE });
export const selectChallengeDates = date => ({
  type: SELECT_CHALLENGE_DATES,
  payload: date
});
export const goToChallenge = moment => ({
  type: GO_TO_CHALLENGE,
  payload: moment
});

export const alert = flag => ({ type: ALERT, payload: flag });

let momentToday = moment();

const MaxChallengeDateLength = 10;

//초기 상태 정의
const initialState = {
  loading: false,
  error: null,
  challengeBarInfo: [],
  dates: [],
  challengeDates: [],
  today: momentToday,
  visible: false,
  toggle: false,
  selectDate: null,
  alert: false
};

//달력 Reducer
export default function calendar(state = initialState, action) {
  switch (action.type) {
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
    case INSERT_SCHEDULE:
      return {
        ...state,
        dates: state.dates.concat(action.payload)
      };
    case DELETE_SCHEDULE: {
      const temp1 = state.dates.filter(elem => elem.id !== action.payload.id);
      const temp2 = state.dates
        .filter(elem => elem.id === action.payload.id)
        .filter(elem => elem.date !== action.payload.date);

      return {
        ...state,
        dates: temp1.concat(temp2)
      };
    }
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
        toggle: !state.toggle
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
    case GO_TO_CHALLENGE:
      return {
        ...state,
        challengeDates: [],
        today: action.payload
      };
    case ALERT:
      return {
        ...state,
        alert: action.payload
      };
    case GET_CALENDAR_DATA:
      return {
        ...state,
        loading: true
      };
    case GET_CALENDAR_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        challengeBarInfo: action.payload.challengeBarInfo,
        dates: action.payload.emptyDayUserInfoArrayList
      };
    case GET_CALENDAR_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
