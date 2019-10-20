/* 액션 타입 만들기 */
const ONLOGIN = "login/ONLOGIN";
const ONLOGOUT = "login/ONLOGOUT";

/* 액션 생성함수 만들기 */
export const onLogin = () => ({ type: ONLOGIN });
export const onLogout = () => ({ type: ONLOGOUT });

/* 초기 상태 선언 */
const initialState = {
  logged: false
};

/* 리듀서 선언 */
export default function counter(state = initialState, action) {
  switch (action.type) {
    case ONLOGIN:
      return {
        ...state,
        logged: true
      };
    case ONLOGOUT:
      const provider = window.sessionStorage.getItem("provider");
      //Kakao AccessToken Remove
      if (provider === "kakao") {
        window.Kakao.Auth.logout(function() {
          console.log("kakao logout");
        });
      }
      //sesstionstorge clear
      window.sessionStorage.clear();

      return {
        ...state,
        logged: false
      };
    default:
      return state;
  }
}
