export const PICTUREFLAGTRUE = "mychallengeDetail/PICTUREFLAGTRUE";
export const PICTUREFLAGFALSE = "mychallengeDetail/PICTUREFLAGFALSE";

export const GET_DETAIL = "mychallengeDetail/GET_DETAIL";
export const GET_DETAIL_SUCCESS = "mychallengeDetail/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "mychallengeDetail/GET_DETAIL_FAILED";

export const TOGGLE_VISIBLE = "mychallengeDetail/TOGGLE_VISIBLE";
export const SET_TEXT = "mychallengeDetail/SET_TEXT"; 

export const SUBMIT_TEXT = "mychallengeDetail/SUBMIT_TEXT"; 
export const SUBMIT_TEXTSUCCESS = "mychallengeDetail/SUBMIT_TEXTSUCCESS";
export const SUBMIT_TEXTFAILED = "mychallengeDetail/SET_MEMBERSFAILED";


export const pictureFlagTrue = () => ({ type: PICTUREFLAGTRUE });
export const pictureFlagFalse = () => ({ type: PICTUREFLAGFALSE });

export const getDetail = (registeredId, uid) => ({ 
  type: GET_DETAIL, 
  payload: {
    registeredId : registeredId,
    uid : uid
  }
 });
export const toggleVisible = visible => ({
  type: TOGGLE_VISIBLE,
  payload: visible
});
export const setText = text => ({ type: SET_TEXT, payload: text });
export const submitText = text => ({ type : SUBMIT_TEXT, payload : text});

/* 초기 상태 선언 */
const initialState = {
  pictureFlag : true,
  members: [{
    id: 1,
    name: "브루스 웨인",
    relation: "아빠",
    color: "#BC61F4",
    thumbnail: ""
  },
  {
    id: 2,
    name: "할리 퀸",
    relation: "엄마",
    color: "aqua",
    thumbnail: ""
  },
  {
    id: 3,
    name: "조커",
    relation: "형",
    color: "orangered",
    thumbnail: ""
  },
],
  certification : {},
  visible: false,
  text: "",
  successInfo : [true, false, false, false, true, true, false, false, false, true]
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

    case GET_DETAIL:
        return {
          ...state,
        };
    case GET_DETAIL_SUCCESS:
        
        return {
          ...state,
          certification : action.payload.certification
        };
    case GET_DETAIL_FAILED:
    return {
      ...state,
      certification : {}
    };
    case TOGGLE_VISIBLE:
      return { ...state, visible: action.payload };
    case SET_TEXT:
      return { ...state, text: action.payload };
    case SUBMIT_TEXT:
      return {
        ...state, text: action.payload
    };

    case SUBMIT_TEXTSUCCESS:
      console.log(action);
    return {
      ...state, text: action.submitText, visible : false
    }
    case SUBMIT_TEXTFAILED:

    return {
      ...state, text: "error", visible : false
    }
    default:
      return state;
  }
}
