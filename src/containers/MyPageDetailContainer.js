/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { connect } from "react-redux";
import * as myPageActions from "../store/modules/mypage";
import * as authActions from "../store/modules/auth";
import { bindActionCreators } from "redux";
import MyPageDetail from "../components/MyPageDetail";

class MyPageDetailContainer extends Component {
  handleMoveMyPage = () => {
    console.log("backRouter");
    window.location.assign("/mypage");
  };

  render() {
    const { members, visible, logged, rowsToDisplay, profileImg } = this.props;
    return <MyPageDetail backPage={this.handleMoveMyPage} members={members} />;
  }
}

const mapStateToProps = ({ mypage, login }) => ({
  imageUrl: mypage.profileImage,
  visible: mypage.visible,
  members: mypage.members,
  logged: login.logged,
  rowsToDisplay: mypage.rowsToDisplay,
  profileImg: mypage.profileImg
});

//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//store의 내장 함수 dispatch를 파라미터로 받온다.
const mapDispatchToProps = dispatch => ({
  MyPageActions: bindActionCreators(myPageActions, dispatch),
  AuthActions: bindActionCreators(authActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPageDetailContainer);
