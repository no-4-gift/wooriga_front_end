import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as myPageActions from "../store/modules/mypage";
import * as loginActions from "../store/modules/auth";
import * as myChallengeAction from "../store/modules/mychallenge";
import * as familyActions from "../store/modules/family";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";
import MyPageDetail from "../components/MyPageDetail";
import CodeCopyModal from "../components/CodeCopyModal";
import LeaderChangeModal from "../components/LeaderChangeModal";
import DeleteMemberModal from "../components/DeleteMemberModal";

class MyPageDetailContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: parseInt(sessionStorage.getItem("uid")),
      familyId: sessionStorage.getItem("familyId")
    };
  }

  componentDidMount() {
    const { FamilyActions } = this.props;
    FamilyActions.getFamilyData(this.state.familyId);
  }

  //이전 페이지로 이동
  handleMoveMyPage = () => {
    console.log("backRouter");
    window.location.assign("/");
  };
  //모달창 열기
  handleOpenModalCodeCopy = () => {
    const { MyPageActions } = this.props;
    MyPageActions.openModalCodeCopy();
  };
  handleOpenModalLeaderChange = leaderId => {
    const { MyPageActions } = this.props;
    MyPageActions.openModalLeaderChange(leaderId);
  };
  handleOpenModalDeleteMember = deleteId => {
    const { MyPageActions } = this.props;
    MyPageActions.openModalDeleteMember(deleteId);
  };
  //모달창 닫기
  handleCloseModal = () => {
    const { MyPageActions } = this.props;
    MyPageActions.closeMyPageModal();
  };

  handleOnDeleteMember = uid => {
    const { MyPageActions } = this.props;
    console.log("여긴되냐");
    console.log(uid);
    MyPageActions.deleteMember(uid);
    this.handleCloseModal();
  };

  //그룹장 변경
  handleChangeLeader = chiefId => {
    const { MyPageActions, members } = this.props;
    let uid = members.map(member => member.uid)[0];
    console.log(chiefId); //미래 가족장
    console.log(this.state.familyId);
    console.log(uid); //원래 가족장
    MyPageActions.changeLeader(this.state.familyId, uid, chiefId);
    this.handleCloseModal();
  };
  render() {
    //const userId = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    const {
      members,
      //visible,
      codecopyvisible,
      changeleadervisible,
      deletemembervisible,
      visitcode,
      leaderId,
      deleteId,
      mypageLoading,
      mypageError
    } = this.props;
    console.log("MyPageDetailContainer-----------");
    console.log(members);
    console.log(this.state.userId);
    console.log("MyPageDetailContainer-----------");
    return (
      <Fragment>
        <MyPageDetail
          backPage={this.handleMoveMyPage}
          members={members}
          userId={this.state.userId}
          onOpenCodeCopy={this.handleOpenModalCodeCopy}
          onOpenLeaderChange={this.handleOpenModalLeaderChange}
          onOpenDeleteMember={this.handleOpenModalDeleteMember}
          //visible={visible}
        />
        <CodeCopyModal
          userId={this.state.userId}
          visible={codecopyvisible}
          onClose={this.handleCloseModal}
          members={members}
          visitcode={this.state.familyId}
        />
        <LeaderChangeModal
          userId={this.state.userId}
          visible={changeleadervisible}
          onClose={this.handleCloseModal}
          members={members}
          leaderId={leaderId}
          onChangeLeader={this.handleChangeLeader}
          familyId={this.state.familyId}
        />
        <DeleteMemberModal
          userId={this.state.userId}
          visible={deletemembervisible}
          onClose={this.handleCloseModal}
          members={members}
          visitcode={this.state.familyId}
          deleteId={deleteId}
          onRemove={this.handleOnDeleteMember}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ family, mypage, login }) => ({
  //mypage
  codecopyvisible: mypage.codecopyvisible,
  changeleadervisible: mypage.changeleadervisible,
  deletemembervisible: mypage.deletemembervisible,
  leaderId: mypage.leaderId,
  deleteId: mypage.deleteId,
  mypageLoading: mypage.loading,
  mypageError: mypage.error,
  //family
  familyLoading: family.loading,
  members: family.members,
  familyError: family.error
  //login
  //logged: login.logged
});

//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//store의 내장 함수 dispatch를 파라미터로 받온다.
const mapDispatchToProps = dispatch => ({
  MyPageActions: bindActionCreators(myPageActions, dispatch),
  LoginActions: bindActionCreators(loginActions, dispatch),
  FamilyActions: bindActionCreators(familyActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPageDetailContainer);
