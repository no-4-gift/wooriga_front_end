const OPEN_MAKE_GROUP_MODAL = "makeGroup/OPEN_MAKE_GROUP_MODAL";
const OPEN_JOIN_GROUP_MODAL = "makeGroup/OPEN_JOIN_GROUP_MODAL";
const CLOSE_MODAL = "makeGroup/CLOSE_MODAL";
const CHANGE_INPUT = "makeGroup/CHANGE_INPUT";
const SELECT_COLOR = "makeGroup/SELECT_COLOR";

//Saga로 만들어야 함
export const openMakeGroup = () => ({ type: OPEN_MAKE_GROUP_MODAL });
export const openJoinGroup = () => ({ type: OPEN_JOIN_GROUP_MODAL });

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
  color: "black"
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
    default:
      return state;
  }
}

export default makeGroup;
