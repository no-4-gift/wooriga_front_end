/* 액션 타입 만들기 */
const OPEN_MODAL = "mypage/OPEN_MODAL"; //모달 창 열기
const CLOSE_MODAL = "mypage/CLOSE_MODAL"; //모달 창 닫기
const SAVE_MODAL = "mypage/SAVE_MODAL"; //프로필색깔,이름,가족관계 저장하기
const SHOWMORE = "mypage/SHOWMORE";

const OPEN_MODAL_CODECOPY = "mypage/OPEN_MODAL_CODECOPY";
const OPEN_MODAL_CHANGELEADER = "mypage/OPEN_MODAL_CHANGELEADER";
const OPEN_MODAL_DELETEMEMBER = "mypage/OPEN_MODAL_DELETEMEMBER";
const REMOVEMEMBER = "mypage/REMOVEMEMBER";

export const POST_PICTURE_UPLOAD = "mypage/POST_PICTURE_UPLOAD";
/* 액션 생성함수 만들기 */
export const openMyPageModal = member => ({
  type: OPEN_MODAL,
  payload: member
});
export const closeMyPageModal = () => ({ type: CLOSE_MODAL });
export const saveMypageModal = myinfo => ({
  type: SAVE_MODAL,
  payload: myinfo //myinfo={name,relation,id,color}
});
export const showMore = memberLenth => ({
  type: SHOWMORE,
  payload: memberLenth
});
export const openModalCodeCopy = () => ({
  type: OPEN_MODAL_CODECOPY
});
export const openModalLeaderChange = changeleaderinfo => ({
  type: OPEN_MODAL_CHANGELEADER,
  payload: changeleaderinfo
});
export const openModalDeleteMember = deletemember => ({
  type: OPEN_MODAL_DELETEMEMBER,
  payload: deletemember
});

export const removeMember = deletemember => ({
  type: REMOVEMEMBER,
  payload: deletemember
});

export const postCertification = (registeredFk, file) => ({
  type: POST_PICTURE_UPLOAD,
  payload: {
    registeredFk: registeredFk,
    file: file
  }
});

export const visitcode = "AF1G5HTL";

/* 초기 상태 선언 */
const initialState = {
  /////////////////////////////

  // profileImg: "",
  rowsToDisplay: 2,
  visible: false,
  codecopyvisible: false,
  changeleadervisible: false,
  deletemembervisible: false,

  changeleaderinfo: null,
  deletemember: null,
  member: "",
  members: [
    {
      id: 1,
      name: "브루스 웨인",
      relation: "아빠",
      date: "2019-10-11",
      color: "red"
    },
    {
      id: 2,
      name: "할리 퀸",
      relation: "엄마",
      date: "2019-10-11",
      color: "blue"
    },
    {
      id: 3,
      name: "조커",
      relation: "형",
      date: "2019-10-11",
      color: "green"
    },
    {
      id: 1174430760,
      name: "데드 샷",
      relation: "나",
      date: "2019-10-11",
      color: "yellow"
    },
    {
      id: 5,
      name: "둠스데이",
      relation: "동생",
      date: "2019-10-11",
      color: "violet"
    }
  ]
};

/* 리듀서 선언 */
export default function mypage(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        visible: true,
        member: action.payload
        // myId:action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        codecopyvisible: false,
        changeleadervisible: false,
        deletemembervisible: false,
        member: null
      };
    case SAVE_MODAL:
      let myinfo = action.payload;
      return {
        ...state,
        members: state.members.map(member =>
          member.id === action.payload.id ? { ...member, ...myinfo } : member
        )

        //members: state.members.find(member => member.id === action.payload.id).map(info=>({...myinfo}))
      };
    case SHOWMORE:
      let memberLenth = action.payload;
      return {
        ...state,
        rowsToDisplay: memberLenth

        //members: state.members.find(member => member.id === action.payload.id).map(info=>({...myinfo}))
      };
    case OPEN_MODAL_CODECOPY:
      return {
        ...state,
        codecopyvisible: true
      };
    case OPEN_MODAL_CHANGELEADER:
      return {
        ...state,
        changeleadervisible: true,
        changeleaderinfo: action.payload
      };
    case OPEN_MODAL_DELETEMEMBER:
      return {
        ...state,
        deletemembervisible: true,
        deletemember: action.payload
      };

    case REMOVEMEMBER:
      return {
        ...state,
        members: state.members.filter(member => member.id !== action.payload)
      };

    case POST_PICTURE_UPLOAD:
      console.log("POST_PICTURE_UPLOAD", action.payload);
      return {
        ...state,
        postLoading: true
      };
    default:
      return state;
  }
}
