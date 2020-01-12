export const OPEN_MAKE_GROUP_MODAL = "makeGroup/OPEN_MAKE_GROUP_MODAL";
export const OPEN_JOIN_GROUP_MODAL = "makeGroup/OPEN_JOIN_GROUP_MODAL";
export const CLOSE_MODAL = "makeGroup/CLOSE_MODAL";
const CHANGE_INPUT = "makeGroup/CHANGE_INPUT";
const SELECT_COLOR = "makeGroup/SELECT_COLOR";

//그룹 생성 모달창에 필요한 유저 정보 GET
export const GET_MY_INFO = "makeGroup/GET_MY_INFO";
export const GET_MY_INFO_SUCCESS = "makeGroup/GET_MY_INFO_SUCCESS";
export const GET_MY_INFO_ERROR = "makeGroup/GET_MY_INFO_ERROR";

//그룹 참가 모달창에 필요한 정보 GET
export const GET_FAMILY_INFO = "makeGroup/GET_FAMILY_INFO";
export const GET_FAMILY_INFO_SUCCESS = "makeGroup/GET_FAMILY_INFO_SUCCESS";
export const GET_FAMILY_INFO_ERROR = "makeGroup/GET_FAMILY_INFO_ERROR";

//그룹 만들기
export const PUT_CREATE_GROUP = "makeGroup/PUT_CREATE_GROUP";
export const PUT_CREATE_GROUP_SUCCESS = "makeGroup/PUT_CREATE_GROUP_SUCCESS";
export const PUT_CREATE_GROUP_ERROR = "makeGroup/PUT_CREATE_GROUP_ERROR";

//그룹 들어가기
export const PUT_JOIN_GROUP = "makeGroup/PUT_JOIN_GROUP";
export const PUT_JOIN_GROUP_SUCCESS = "makeGroup/PUT_JOIN_GROUP";
export const PUT_JOIN_GROUP_ERROR = "makeGroup/PUT_JOIN_GROUP";

export const getMyInfo = uid => ({ type: GET_MY_INFO, payload: uid });
export const getFamilyInfo = (uid, code) => ({
  type: GET_FAMILY_INFO,
  payload: { uid: uid, code: code }
});

export const createGroup = (uid, color, relationShip, history) => ({
  type: PUT_CREATE_GROUP,
  payload: {
    uid: uid,
    color: color,
    relationShip: relationShip,
    history: history
  }
});

export const joinGroup = (uid, color, relationShip, familyId, history) => ({
  type: PUT_CREATE_GROUP,
  payload: {
    uid: uid,
    familyId: familyId,
    color: color,
    relationShip: relationShip,
    history: history
  }
});

/*export const openMakeGroup = () => ({ type: OPEN_MAKE_GROUP_MODAL });
export const openJoinGroup = () => ({ type: OPEN_JOIN_GROUP_MODAL });
*/

export const closeModal = () => ({ type: CLOSE_MODAL });
export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  payload: {
    name: name,
    value: value
  }
});
export const selectColor = color => ({ type: SELECT_COLOR, payload: color });

const initState = {
  toggle: false,
  modalKind: 1,
  input: {
    code: "",
    relationShip: ""
  },
  color: "black",
  loading: false,
  data: null,
  error: null
};

function makeGroup(state = initState, action) {
  switch (action.type) {
    case OPEN_MAKE_GROUP_MODAL:
      return {
        ...state,
        toggle: true,
        modalKind: 1
      };
    case OPEN_JOIN_GROUP_MODAL:
      return {
        ...state,
        toggle: true,
        modalKind: 2
      };
    case CLOSE_MODAL:
      return {
        ...state,
        toggle: false,
        color: "",
        input: {
          code: "",
          relationShip: ""
        }
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: {
          ...state.input,
          [action.payload.name]: action.payload.value
        }
      };
    case SELECT_COLOR:
      return {
        ...state,
        color: action.payload
      };
    case GET_FAMILY_INFO:
    case GET_MY_INFO:
      return {
        ...state,
        loading: true,
        error: null
      };
    case GET_FAMILY_INFO_SUCCESS:
    case GET_MY_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case GET_FAMILY_INFO_ERROR:
    case GET_MY_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case PUT_CREATE_GROUP:
    case PUT_JOIN_GROUP:
      return {
        ...state,
        loading: true,
        error: null
      };
    case PUT_CREATE_GROUP_SUCCESS:
    case PUT_JOIN_GROUP_SUCCESS:
      return {
        ...state,
        loading: false
      };
    case PUT_CREATE_GROUP_ERROR:
    case PUT_JOIN_GROUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default makeGroup;
