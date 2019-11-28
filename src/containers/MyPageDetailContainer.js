import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as myPageActions from "../store/modules/mypage";
import * as loginActions from "../store/modules/login";
import { bindActionCreators } from "redux";
import MyPageDetail from "../components/MyPageDetail";
import CodeCopyModal from "../components/CodeCopyModal";
import LeaderChangeModal from "../components/LeaderChangeModal";
import DeleteMemberModal from "../components/DeleteMemberModal";

class MyPageDetailContainer extends Component {
  //이전 페이지로 이동
  handleMoveMyPage = () => {
    console.log("backRouter");
    window.location.assign("/mypage");
  };
  //모달창 열기
  handleOpenModalCodeCopy = () => {
    const { MyPageActions } = this.props;
    MyPageActions.openModalCodeCopy();
  };
  handleOpenModalLeaderChange = changeleaderinfo => {
    const { MyPageActions } = this.props;
    MyPageActions.openModalLeaderChange(changeleaderinfo);
  };
  handleOpenModalDeleteMember = deletemember => {
    const { MyPageActions } = this.props;
    MyPageActions.openModalDeleteMember(deletemember);
  };
  //모달창 닫기
  handleCloseModal = () => {
    const { MyPageActions } = this.props;
    MyPageActions.closeMyPageModal();
  };

  handleOnRemoveMember = deletemember => {
    const { MyPageActions } = this.props;
    MyPageActions.removeMember(deletemember);
    this.handleCloseModal();
  };
  render() {
    const myid = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    const {
      members,
      visible,
      codecopyvisible,
      changeleadervisible,
      deletemembervisible,
      visitcode,
      changeleaderinfo,
      deletemember
    } = this.props;
    console.log("MyPageDetailContainer-----------");
    console.log(visitcode);
    console.log(changeleaderinfo);
    console.log(deletemember);
    console.log("MyPageDetailContainer-----------");
    return (
      <Fragment>
        <MyPageDetail
          backPage={this.handleMoveMyPage}
          members={members}
          onOpenCodeCopy={this.handleOpenModalCodeCopy}
          onLeaderChange={this.handleOpenModalLeaderChange}
          onDeleteMember={this.handleOpenModalDeleteMember}
          visible={visible}
        />
        <CodeCopyModal
          myid={myid}
          visible={codecopyvisible}
          onClose={this.handleCloseModal}
          members={members}
          visitcode={visitcode}
        />
        <LeaderChangeModal
          myid={myid}
          visible={changeleadervisible}
          onClose={this.handleCloseModal}
          members={members}
          changeleaderinfo={changeleaderinfo}
        />
        <DeleteMemberModal
          myid={myid}
          visible={deletemembervisible}
          onClose={this.handleCloseModal}
          members={members}
          visitcode={visitcode}
          deletemember={deletemember}
          onRemove={this.handleOnRemoveMember}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ mypage, login }) => ({
  visible: mypage.visible,
  codecopyvisible: mypage.codecopyvisible,
  changeleadervisible: mypage.changeleadervisible,
  deletemembervisible: mypage.deletemembervisible,
  members: mypage.members,
  logged: login.logged,
  rowsToDisplay: mypage.rowsToDisplay,
  visitcode: mypage.visitcode,
  changeleaderinfo: mypage.changeleaderinfo,
  deletemember: mypage.deletemember
});

//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//store의 내장 함수 dispatch를 파라미터로 받온다.
const mapDispatchToProps = dispatch => ({
  MyPageActions: bindActionCreators(myPageActions, dispatch),
  LoginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPageDetailContainer);
