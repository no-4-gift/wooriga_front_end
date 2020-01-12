/* 액션 타입 만들기 */
export const ONCALENDAR = "statics/ONCALENDAR";
export const ONMASKGROUP = "statics/ONMASKGROUP";
export const ONCONTACT = "statics/ONCONTACT";

export const GET_FAMILYID = "statics/GET_FAMILID";
export const GET_FAMILID_SUCCESS = "statics/GET_FAMILID_SUCCESS";
export const GET_FAMILYID_ERROR = "statics/GET_FAMILYID_ERROR";

/* 액션 생성함수 만들기 */
export const onCalendar = () => ({ type: ONCALENDAR });
export const onMaskGroup = () => ({ type: ONMASKGROUP });
export const onContact = () => ({ type: ONCONTACT });

export const getFamilyId = uid => ({ type: GET_FAMILYID, payload: uid });

/* 초기 상태 선언 */
const initialState = {
  checked: 2,
  loading: true,
  data: null,
  error: null
};
/* 리듀서 선언 */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case ONCALENDAR:
      console.log("ONCALENDAR");
      return {
        ...state,
        checked: 1
      };
    case ONMASKGROUP:
      console.log("ONMASKGROUP");
      return {
        ...state,
        checked: 2
      };
    case ONCONTACT:
      console.log("ONCONTACT");
      return {
        ...state,
        checked: 3
      };
    case GET_FAMILYID:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_FAMILID_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_FAMILYID_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}
