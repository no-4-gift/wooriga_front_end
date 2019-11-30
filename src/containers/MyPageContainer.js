import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as myPageActions from "../store/modules/mypage";
import * as loginActions from "../store/modules/auth";
import * as myChallengeAction from "../store/modules/mychallenge";
import * as familyActions from "../store/modules/family";

import MyPageModal from "../components/MyPageModal";
import MyPage from "../components/MyPage";
import { bindActionCreators } from "redux";

const familyId = "wooriga";
const userId = 1615409;
let reader = new FileReader();
class MyPageContainer extends Component {
  componentDidMount() {
    const {
      FamilyActions,
      MyChallengeActions,
      challenger_challenges,
      participation_challenges
    } = this.props;
    FamilyActions.getFamilyData(familyId);
    MyChallengeActions.onGetChallenger(familyId, userId);
    MyChallengeActions.onGetParticipation(familyId, userId);
    console.log(FamilyActions.getFamilyData(familyId));
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedFile: "",
      imagePreviewUrl: "",
      challenger_challenges: [],
      participation_challenges: []
    };
  }

  //모달 열기& 닫기
  handleShowModal = () => {
    const { MyPageActions } = this.props;
    MyPageActions.openMyPageModal();
  };
  handleCloseModal = () => {
    const { MyPageActions } = this.props;
    MyPageActions.closeMyPageModal();
  };

  //로그아웃
  handleLogout = () => {
    const { LoginActions } = this.props;
    LoginActions.onLogout();
    this.props.history.push("/login");
  };

  //패밀리 멤버 보여주기
  handleshowMore = ({ memberlength }) => {
    const { MyPageActions } = this.props;
    MyPageActions.showMore(memberlength);
    console.log("memberlenth는 : " + memberlength);
  };

  //Modal Input 저장

  // handleChange = (e) => {
  //   console.log(this.state.myname);
  //   console.log(this.state.myrelation);
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // }
  // handleSubmit = (e) => {
  //   // 페이지 리로딩 방지
  //   e.preventDefault();
  //   // 상태값을 onCreate 를 통하여 부모에게 전달
  //   this.props.onCreate(this.state);
  //   // 상태 초기화
  //   this.setState({
  //     myname: '',
  //     myrelation: ''
  //   })
  // }
  handleCreate = data => {
    console.log(data);
  };

  handleSaveModal = ({ members }) => {
    const { MyPageActions } = this.props;
    console.log(this.props);
    this.handleCloseModal();
    MyPageActions.saveMypageModal(members);
  };

  //페이지 이동
  MovedetailPage = () => {
    window.location.assign("/mypage_detail");
  };

  detailRouter = detailProps => {
    const { challenger_challenges } = this.props;
    this.props.history.push(`/mychallenge_detail/${detailProps}`, {
      flag: "main",
      challenger_challenges: challenger_challenges
    });
  };

  bottomDetailRouter = bottomProps => {
    const { participation_challenges } = this.props;
    this.props.history.push(`/mychallenge_detail/${bottomProps}`, {
      flag: "sub",
      participation_challenges: participation_challenges
    });
  };

  //프로필 사진
  handleInfoChange = (e, userId) => {
    const { MyPageActions, members, familyId } = this.props;

    const birth = members
      .filter(x => x.uid === userId)
      .map(member => member.birth);
    const color = members
      .filter(x => x.uid === userId)
      .map(member => member.color);
    const email = members
      .filter(x => x.uid === userId)
      .map(member => member.email);
    const name = members
      .filter(x => x.uid === userId)
      .map(member => member.name);
    const relationship = members
      .filter(x => x.uid === userId)
      .map(member => member.relationship);

    let file = e.target.files[0];

    console.log(
      "mypageconainter 의 내정보 확인-----------------------------뀨"
    );
    console.log("e.target.files[0]", e.target.files[0]);
    console.log("birth", birth);
    console.log("color", color);
    console.log("email", email);
    console.log("color", color);
    console.log("name", name);
    console.log("relationship", relationship);
    console.log("file", file);
    console.log(
      "mypageconainter 의 내정보 확인-----------------------------뀨"
    );
    reader.onloadend = () => {
      this.setState(
        {
          selectedFile: file,
          imagePreviewUrl: reader.result
        },
        () => {
          MyPageActions.postMyInfo(
            birth,
            color,
            email,
            familyId,
            name,
            this.state.selectedFile,
            relationship,
            userId
          );
        }
      );
    };

    reader.readAsDataURL(e.target.files[0]);
  };
  //////////////////////////////////
  render() {
    //const myid = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    // const {
    //   familyLoading,
    //   members,
    //   familyError,
    //   visible,
    //   //logged,
    //   rowsToDisplay,
    //   challenger_challenges,
    //   participation_challenges
    // } = this.props;
    //const {pictureFlag, certification, certificationArray, pictureUrl, changeLoading, deleteLoading} = this.props
    const {
      members,
      familyError,
      visible,
      //logged,
      rowsToDisplay,
      pictureUrl,
      familyLoading,
      changeLoading,
      deleteLoading,
      postLoading
    } = this.props;
    let {
      imagePreviewUrl,
      challenger_challenges,
      participation_challenges
    } = this.state;
    let $imagePreview = null;
    let memberlength = members.length;
    console.log("mypagecontainer-----------");
    console.log(`id is ${userId}`);
    //console.log(logged);
    console.log("mypagecontainer-----------");

    if (familyError) {
      return <div>사용자를 불러오지 못하고 있습니다.</div>;
    } else {
      return (
        <Fragment>
          <MyPage
            userId={userId}
            visible={visible}
            members={members}
            onShow={this.handleShowModal}
            onShowMoreBtn={this.handleshowMore}
            rowsToDisplay={rowsToDisplay}
            MovedetailPage={this.MovedetailPage}
            challenger_challenges={challenger_challenges}
            participation_challenges={participation_challenges}
            detailRouter={this.detailRouter}
            bottomDetailRouter={this.bottomDetailRouter}
          />
          <MyPageModal
            userId={userId}
            visible={visible}
            members={members}
            // onSave={this.handleSaveModal}
            onClose={this.handleCloseModal}
            onLogout={this.handleLogout}
            onSave={this.handleSaveModal}
            //logged={logged}
            // onChange={this.handleChange}
            // onInputSubmit={this.handleSubmit}
            onCreate={this.handleCreate}
            //프로필사직
            pictureUrl={pictureUrl}
            fileOnChange={this.handleInfoChange}
            imagePreviewUrl={imagePreviewUrl}
            $imagePreview={$imagePreview}
          />
          {/* <MyPageDetail backRouter={this.handlebackRouter} /> */}
        </Fragment>
      );
    }
  }
}

// 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//state 를 파라미터로 받아온다 . 현재 store 가 가지고 있는 상태
const mapStateToProps = ({ family, mypage, login, mychallenge }) => ({
  //logged: login.logged,

  //mypage
  pictureUrl: mypage.pictureUrl,
  postLoading: mypage.postlodaing,
  changeLoading: mypage.changeloading,
  deleteLoading: mypage.deleteloading,
  visible: mypage.visible,
  rowsToDisplay: mypage.rowsToDisplay,
  //family
  familyLoading: family.loading,
  members: family.members,
  familyError: family.error,
  //challenge
  challenger_challenges: mychallenge.challenger_challenges,
  participation_challenges: mychallenge.participation_challenges
});

//액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수
//store의 내장 함수 dispatch를 파라미터로 받온다.
const mapDispatchToProps = dispatch => ({
  MyPageActions: bindActionCreators(myPageActions, dispatch),
  LoginActions: bindActionCreators(loginActions, dispatch),
  FamilyActions: bindActionCreators(familyActions, dispatch),
  MyChallengeActions: bindActionCreators(myChallengeAction, dispatch)
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MyPageContainer)
);
