/* 액션 타입 만들기 */
const OPEN_MODAL = "mypage/OPEN_MODAL"; //모달 창 열기
const CLOSE_MODAL = "mypage/CLOSE_MODAL"; //모달 창 닫기
const SAVE_MODAL = "mypage/SAVE_MODAL"; //프로필색깔,이름,가족관계 저장하기
const SHOWMORE = "mypage/SHOWMORE";

const OPEN_MODAL_CODECOPY = "mypage/OPEN_MODAL_CODECOPY";
const OPEN_MODAL_CHANGELEADER = "mypage/OPEN_MODAL_CHANGELEADER";
const OPEN_MODAL_DELETEMEMBER = "mypage/OPEN_MODAL_DELETEMEMBER";
//멤버 삭제
export const DELETE_MEMBER = "mypage/DELETE_MEMBER";
export const DELETE_MEMBER_SUCCESS = "mypage/DELETE_MEMBER_SUCCESS";
export const DELETE_MEMBER_ERROR = "mypage/DELETE_MEMBER_ERROR";

//그룹장 변경
export const CHANGE_LEADER = "mypage/CHANGE_LEADER";
export const CHANGE_LEADER_SUCCESS = "mypage/CHANGE_LEADER_SUCCESS";
export const CHANGE_LEADER_ERROR = "mypage/CHANGE_LEADER_ERROR";
//내정보 변경
export const POST_MYINFO_UPLOAD = "mypage/POST_MYINFO_UPLOAD";
export const POST_MYINFO_UPLOAD_SUCCESS = "mypage/POST_MYINFO_UPLOAD_SUCCESS";
export const POST_MYINFO_UPLOAD_FAILED = "mypage/POST_MYINFO_UPLOAD_FAILED";

/* 액션 생성함수 만들기 */
export const changeLeader = (familyId, uid, chiefId) => ({
  type: CHANGE_LEADER,
  payload: {
    familyId: familyId,
    uid: uid,
    chiefId: chiefId
  }
});
export const deleteMember = uid => ({
  type: DELETE_MEMBER,
  payload: uid
});
export const openMyPageModal = () => ({
  type: OPEN_MODAL
  //payload: member
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
export const openModalLeaderChange = leaderId => ({
  type: OPEN_MODAL_CHANGELEADER,
  payload: leaderId
});
export const openModalDeleteMember = deleteId => ({
  type: OPEN_MODAL_DELETEMEMBER,
  payload: deleteId
});

export const postMyInfo = (
  birth,
  color,
  email,
  familyId,
  name,
  file,
  relationship,
  uid
) => ({
  type: POST_MYINFO_UPLOAD,
  payload: {
    birth: birth,
    color: color,
    email: email,
    familyId: familyId,
    name: name,
    file: file,
    relationship: relationship,
    uid: uid
  }
});

/* 초기 상태 선언 */
const initialState = {
  rowsToDisplay: 2,
  visible: false,

  codecopyvisible: false,
  changeleadervisible: false,
  deletemembervisible: false,

  deleteloading: false,
  changeloading: false,
  postloading: false,
  pictureUrl: ""
};

/* 리듀서 선언 */
export default function mypage(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        visible: true
        //member: action.payload
        // myId:action.payload
      };
    case CLOSE_MODAL:
      return {
        ...state,
        visible: false,
        codecopyvisible: false,
        changeleadervisible: false,
        deletemembervisible: false
      };
    case SAVE_MODAL:
      //let myinfo = action.payload;
      return {
        ...state
        //members: state.members.map(member =>
        //  member.uid === action.payload ? { ...member, ...myinfo } : member
        //)

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
        leaderId: action.payload
      };
    case OPEN_MODAL_DELETEMEMBER:
      return {
        ...state,
        deletemembervisible: true,
        deleteId: action.payload
      };

    ///////////////////////////////////////////////////////
    case CHANGE_LEADER:
      console.log("CHANGE_LEADER", action.payload);
      return {
        ...state,
        changeloading: true
      };

    case CHANGE_LEADER_SUCCESS:
      console.log("CHANGE_LEADER_SUCCESS", action.payload);
      return {
        ...state,
        changeloading: action.payload.changeloading
      };
    case CHANGE_LEADER_ERROR:
      console.log("CHANGE_LEADER_ERROR", action.payload);
      return {
        ...state,
        changeloading: action.payload.changeloading
      };

    case DELETE_MEMBER:
      console.log("DELETE_MEMBER", action.payload);
      return {
        ...state,
        deleteloading: true
      };

    case DELETE_MEMBER_SUCCESS:
      console.log("DELETE_MEMBER_SUCCESS", action.payload);
      return {
        ...state,
        deleteloading: action.payload.deleteloading
      };
    case DELETE_MEMBER_ERROR:
      console.log("DELETE_MEMBER_ERROR", action.payload);
      return {
        ...state,
        deleteloading: action.payload.deleteloading
      };

    case POST_MYINFO_UPLOAD:
      return {
        ...state,
        postloading: true
      };
    case POST_MYINFO_UPLOAD_SUCCESS:
      return {
        ...state,
        postloading: false
      };
    case POST_MYINFO_UPLOAD_FAILED:
      return {
        ...state,
        postloading: false
      };
    default:
      return state;
  }
}
