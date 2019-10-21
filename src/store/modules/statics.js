/* 액션 타입 만들기 */
const ONCALENDAR = "login/ONCALENDAR";
const ONMASKGROUP = "login/ONMASKGROUP";
const ONCONTACT = "login/ONCONTACT";

/* 액션 생성함수 만들기 */
export const onCalendar = () => ({ type: ONCALENDAR });
export const onMaskGroup = () => ({ type: ONMASKGROUP });
export const onContact = () => ({ type: ONCONTACT });

/* 초기 상태 선언 */
const initialState = {
  checked : 1
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
    default:
      return state;
  }
}
