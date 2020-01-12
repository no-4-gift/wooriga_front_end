/* 액션 타입 만들기 */
export const ONLOGIN = "auth/ONLOGIN";
export const ONLOGIN_SUCCESS = "auth/ONLOGIN_SUCCESS";
export const ONLOGIN_ERROR = "auth/ONLOGIN_ERROR";

const ONLOGOUT = "auth/ONLOGOUT";

const SET_KAKAO_ERROR = "auth/SET_KAKAO_ERROR";
const LOGGED = "auth/LOGGED";

export const SET_UID = "auth/SET_UID";
export const SET_FAMILYID = "auth/SET_FAMILYID";

/* 액션 생성함수 만들기 */
export const onLogin = (id, nickname, profile) => ({
  type: ONLOGIN,
  payload: {
    id: id,
    nickname: nickname,
    profile: profile
  }
});

export const setKakaoError = error => ({
  type: SET_KAKAO_ERROR,
  payload: error
});
export const setUserId = uid => ({ type: SET_UID, payload: uid });
export const setFamilyId = familyId => ({
  type: SET_FAMILYID,
  payload: familyId
});

export const onLogout = () => ({ type: ONLOGOUT });
export const onLogged = () => ({ type: LOGGED });

/* 초기 상태 선언 */
const initialState = {
  logged: false,
  kakaoError: null,
  firstLogin: false,
  uid: null,
  familyId: null,
  error: null
};

/* 리듀서 선언 */
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGGED:
      return {
        ...state,
        logged: true
      };
    case ONLOGIN:
      return {
        ...state,
        logged: false,
        kakaoError: null,
        firstLogin: false,
        uid: null,
        familyId: null,
        error: null
      };
    case ONLOGIN_SUCCESS:
      return {
        ...state,
        logged: true,
        firstLogin: action.payload.firstLogin,
        uid: action.payload.uid
      };
    case ONLOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case SET_KAKAO_ERROR:
      return {
        ...state,
        kakaoError: action.payload
      };
    case SET_UID:
      return {
        ...state,
        uid: action.payload
      };
    case SET_FAMILYID:
      return {
        ...state,
        familyId: action.payload
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
