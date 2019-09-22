import { createAction, handleActions } from "redux-actions";
import moment, { Moment as MomentTypes } from "moment";

const CHAGNE_DATES = "calendar/CHAGNE_DATES"; //선택 년도에 저장된 모든 일정들
const SELECT_DATES = "calendar/SELECT_DATES"; //자신의 날짜들 선택
const CHANGE_TODAY = "calendar/CHANGE_TODAY"; //기준 시작 날짜
const ISLOADING = "calendar/ISLOADING"; // api 호출 로딩
const TOGGLE = "calendar/TOGGLE"; //편집 화면, 일정 확인 화면 전환
const SELECT_CHALLENGE = "calendar/SELECT_CHALLENGE"; // 챌린지 날짜 선택

export const changeDates = createAction(CHAGNE_DATES, dates => dates);
export const selectDate = createAction(SELECT_DATES, mydates => mydates);
export const changeToday = createAction(CHANGE_TODAY, today => today);
export const isLoading = createAction(ISLOADING, loading => loading); //true or false
export const onToggle = createAction(TOGGLE, toggle => toggle);
export const selectDay = createAction(SELECT_CHALLENGE, selected => selected);

let momentToday = moment();

const initialState = {
  dates: [],
  mydates: [],
  selectedDates: [],
  today: momentToday,
  isLoading: true,
  isVisible: false,
  toggle: false
};

export default handleActions(
  {
    [CHAGNE_DATES]: (state, action) => ({
      ...state,
      dates: action.payload
    }),
    [SELECT_DATES]: (state, action) => ({
      ...state,
      mydates: action.payload
    }),
    [CHANGE_TODAY]: (state, action) => ({
      ...state,
      today: action.payload
    }),
    [ISLOADING]: (state, action) => ({
      ...state,
      isLoading: action.payload
    }),
    [onToggle]: (state, action) => ({
      ...state,
      toggle: action.payload
    }),
    [SELECT_CHALLENGE]: (state, action) => ({
      ...state,
      selectedDates: action.payload
    })
  },
  initialState
);
