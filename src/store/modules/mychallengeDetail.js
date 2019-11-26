export const PICTUREFLAGTRUE = "mychallengeDetail/PICTUREFLAGTRUE";
export const PICTUREFLAGFALSE = "mychallengeDetail/PICTUREFLAGFALSE";

export const GET_DETAIL = "mychallengeDetail/GET_DETAIL";
export const GET_DETAIL_SUCCESS = "mychallengeDetail/GET_DETAIL_SUCCESS";
export const GET_DETAIL_FAILED = "mychallengeDetail/GET_DETAIL_FAILED";

export const pictureFlagTrue = (image, date) => ({ 
  type: PICTUREFLAGTRUE, 
  payload : {
    image : image, 
    date : date
  } 
});
export const pictureFlagFalse = (date) => ({ type: PICTUREFLAGFALSE,
  payload : {
    date : date
  }
});

export const getDetail = (registeredId, uid) => ({ 
  type: GET_DETAIL, 
  payload: {
    registeredId : registeredId,
    uid : uid
  }
 });

/* 초기 상태 선언 */
const initialState = {
  pictureFlag : true,
  pictureUrl : "",
  cardDate : "",
  certification : [],
  certificationArray : [],
};
/* 리듀서 선언 */
export default (state = initialState, action) => {
  switch (action.type) {
    case PICTUREFLAGTRUE:
    console.log(action.payload)
        return {
            ...state,
            pictureFlag: 1,
            pictureUrl : action.payload.image,
            cardDate : action.payload.date
        };
    case PICTUREFLAGFALSE:
        return {
        ...state,
        pictureFlag: 0,
        pictureUrl : "",
        cardDate : action.payload.date,
        };

    case GET_DETAIL:
        return {
          ...state,
          certification : [],
          certificationArray : [],
        };
    case GET_DETAIL_SUCCESS:
        return {
          ...state,
          certification : action.payload.certification,
          certificationArray : action.payload.certification.certificationInfoArrayList,
        };
    case GET_DETAIL_FAILED:
    return {
      ...state,
      certification : [],
      certificationArray : [],
    };
    default:
      return state;
  }
}
