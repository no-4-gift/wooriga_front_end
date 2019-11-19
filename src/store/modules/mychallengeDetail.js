export const PICTUREFLAGTRUE = "mychallengeDetail/PICTUREFLAGTRUE";
export const PICTUREFLAGFALSE = "mychallengeDetail/PICTUREFLAGFALSE";

export const SET_MEMBERS = "mychallengeDetail/SET_MEMBERS";
export const SET_MEMBERSSUCCESS = "mychallengeDetail/SET_MEMBERSSUCCESS";
export const SET_MEMBERSFAILED = "mychallengeDetail/SET_MEMBERSFAILED";

export const TOGGLE_VISIBLE = "mychallengeDetail/TOGGLE_VISIBLE";
export const SET_TEXT = "mychallengeDetail/SET_TEXT"; 

export const pictureFlagTrue = () => ({ type: PICTUREFLAGTRUE });
export const pictureFlagFalse = () => ({ type: PICTUREFLAGFALSE });

export const setMembers = data => ({ type: SET_MEMBERS, payload: data });
export const toggleVisible = visible => ({
  type: TOGGLE_VISIBLE,
  payload: visible
});
export const setText = text => ({ type: SET_TEXT, payload: text });

/* 초기 상태 선언 */
const initialState = {
  pictureFlag : true,
  members: [],
  visible: false,
  text: "",
};
/* 리듀서 선언 */
export default (state = initialState, action) => {
  switch (action.type) {
    case PICTUREFLAGTRUE:
        return {
            ...state,
            pictureFlag: true
        };
    case PICTUREFLAGFALSE:
        return {
        ...state,
        pictureFlag: false
        };

    case SET_MEMBERS:
        return {
          ...state,
          members: action.payload
        };
    case SET_MEMBERSSUCCESS:
        return {
          ...state,
          members: []
        };
    case SET_MEMBERSFAILED:
    return {
      ...state,
      members: []
    };
    case TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case SET_TEXT:
      return { ...state, text: action.payload };

    default:
      return state;
  }
}
