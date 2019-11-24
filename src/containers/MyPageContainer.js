import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as myPageActions from "../store/modules/mypage";
import * as loginActions from "../store/modules/login";
import MyPageModal from "../components/MyPageModal";
import MyPage from "../components/MyPage";
import { bindActionCreators } from "redux";

class MyPageContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectImage: "",
      imageUrl: ""
    };
  }

  handleShowModal = members => {
    const { MyPageActions } = this.props;
    MyPageActions.openMyPageModal(members);
  };
  handleCloseModal = () => {
    const { MyPageActions } = this.props;
    MyPageActions.closeMyPageModal();
  };
  handleLogout = () => {
    const { LoginActions } = this.props;
    LoginActions.onLogout();
    this.props.history.push("/login");
  };

  handleSaveModal = ({ members }) => {
    const { MyPageActions } = this.props;
    console.log(this.props);
    this.handleCloseModal();
    MyPageActions.saveMypageModal(members);
  };

  handleshowMore = ({ memberlength }) => {
    const { MyPageActions } = this.props;
    MyPageActions.showMore(memberlength);
    console.log("memberlenth는 : " + memberlength);
  };

  handleInputChange = e => {
    const { profileImg, MyPageActions } = this.props;
    console.log("profileImg", profileImg);
    MyPageActions.setProfileImg(e.target.value);
  };

  handleImgOnChange = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    console.log("e.target.files[0]", e.target.files[0]);

    reader.onloadend = () => {
      this.setState(
        {
          selectImage: file,
          imageUrl: reader.result
        },
        () => {
          console.log(this.state.selectImage);

          // var formData = new FormData();
          // formData.append("file", this.state.selectedFile);
          // console.log("formData : ", formData.get("file"));
          // let imgHeight = document.getElementById("circlePlus").clientHeight;
          // let imgWidth = document.getElementById("circlePlus").clientWidth;
          let imgHeight = "30px";
          let imgWidth = "30px";
          console.log("imgHeight--------------------------");
          console.log(imgHeight, imgWidth);
          console.log("imgHeight--------------------------");
        }
      );
    };

    console.log("timing");
    reader.readAsDataURL(e.target.files[0]);
  };

  MovedetailPage = () => {
    window.location.assign("/mypage_detail");
  };
  //////////////////////////////////
  render() {
    const myid = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    const { members, visible, logged, rowsToDisplay, profileImg } = this.props;
    let memberlength = members.length;
    let { imageUrl } = this.state;
    let $initImg = null;
    console.log("mypagecontainer-----------");
    console.log(`id is ${myid}`);
    console.log(visible);
    console.log(members);
    console.log(memberlength);
    console.log(rowsToDisplay);
    console.log(logged);
    console.log(profileImg);
    console.log("mypagecontainer-----------");

    return (
      <Fragment>
        <MyPage
          myid={myid}
          visible={visible}
          members={members}
          onShow={this.handleShowModal}
          onShowMoreBtn={this.handleshowMore}
          rowsToDisplay={rowsToDisplay}
          MovedetailPage={this.MovedetailPage}
        />
        <MyPageModal
          myid={myid}
          visible={visible}
          members={members}
          // onSave={this.handleSaveModal}
          onClose={this.handleCloseModal}
          onLogout={this.handleLogout}
          onSave={this.handleSaveModal}
          logged={logged}
          ImgOnChange={this.handleImgOnChange}
          imageUrl={imageUrl}
          $initImg={$initImg}
          onChange={this.handleInputChange}
        />
        {/* <MyPageDetail backRouter={this.handlebackRouter} /> */}
      </Fragment>
    );
  }
}

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//state 를 파라미터로 받아온다 . 현재 store 가 가지고 있는 상태
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
  LoginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MyPageContainer);
