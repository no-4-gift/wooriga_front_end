/* 액션 타입 만들기 */
const SAVE_MODAL = "groupAdd/SAVE_MODAL";
const CLOSE_MODAL = "groupAdd/CLOSE_MODAL"; //모달 창 닫기
const OPEN_MODAL_ADDGROUP = "groupAdd/OPEN_MODAL_ADDGROUP";

/* 액션 생성함수 만들기 */

export const saveModal = () => ({ type: SAVE_MODAL });
export const closeModal = () => ({ type: CLOSE_MODAL });
export const openModalAddGroup = members=> ({
  type: OPEN_MODAL_ADDGROUP,
  payload: members
});

/* 초기 상태 선언 */
const initialState = {
  visible: false,
  pictureUrl : "",
}

/* 리듀서 선언 */
export default function groupAdd(state = initialState, action) {
    switch (action.type) {
      case CLOSE_MODAL:
        return {
          ...state,
          visible: false
        };
      case SAVE_MODAL:
        return {
          ...state,   
        };  
      case OPEN_MODAL_ADDGROUP:
        return {
          ...state,
          visible: true,
          members: action.payload
        };
      
      default:
        return state;
    }
  }
  
