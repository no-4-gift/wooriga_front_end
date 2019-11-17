const PICTUREFLAGTRUE = "mychallengeDetail/PICTUREFLAGTRUE";
const PICTUREFLAGFALSE = "mychallengeDetail/PICTUREFLAGFALSE";

export const pictureFlagTrue = () => ({ type: PICTUREFLAGTRUE });
export const pictureFlagFalse = () => ({ type: PICTUREFLAGFALSE });

/* 초기 상태 선언 */
const initialState = {
  pictureFlag : true
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
    default:
      return state;
  }
}
