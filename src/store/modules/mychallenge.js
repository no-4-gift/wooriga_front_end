/* 액션 타입 만들기 */
export const GETCHALLENGER = "mychallenge/GETCHALLENGER";
export const GETPARTICIPATION = "mychallenge/GETPARTICIPATION";

export const GETCHALLENGER_SUCCESS = "mychallenge/GETCHALLENGER_SUCCESS";
export const GETPARTICIPATION_SUCCESS = "mychallenge/GETPARTICIPATION_SUCCESS";

export const GETCHALLENGER_ERROR = "mychallenge/GETCHALLENGER_ERROR";
export const GETPARTICIPATION_ERROR = "mychallenge/GETPARTICIPATION_ERROR";



/* 액션 생성함수 만들기 */
export const onGetChallenger = (familyId, uid) => ({ 
    type: GETCHALLENGER,
    payload : {
      familyId : familyId,
      uid : uid
    }
});
export const onGetParticipation = (familyId, uid) => ({
    type: GETPARTICIPATION,
    payload : {
      familyId : familyId,
      uid : uid
    }
});

/* 초기 상태 선언 */
const initialState = {
    loading: false,
    challenger_challenges: [],
    participation_challenges: [],
    error: null
};
/* 리듀서 선언 */
export default (state = initialState, action) => {
  switch (action.type) {
    
    case GETCHALLENGER:
      
      return {
        ...state,
        loading: true,
        challenger_challenges : []
    };
    case GETPARTICIPATION:
      
      return {
        ...state,
        loading: true,
        participation_challenges : []
    };
    case GETCHALLENGER_SUCCESS:
    console.log("GETCHALLENGER_SUCCESS", action.payload.challengerInfo)
      return {
        ...state,
        loading: false,
        challenger_challenges : action.payload.challengerInfo
    };
    case GETPARTICIPATION_SUCCESS:
      console.log("GETPARTICIPATION_SUCCESS", action.payload.participationInfo)
      return {
        ...state,
        loading: false,
        participation_challenges : action.payload.participationInfo
    };
    case GETCHALLENGER_ERROR:
      
      return {
        ...state,
        loading: false,
        error : action.payload
    };
    case GETPARTICIPATION_ERROR:
      
      return {
        ...state,
        loading: false,
        error : action.payload
    };
    default:
      return state;
  }
}
