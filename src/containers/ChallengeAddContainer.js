import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as challengeAddActions from "../store/modules/challengeAdd";
import ChallengeAdd from "../components/ChallengeAdd";
import queryString from "querystring";
import { Spin, Alert } from "antd";
import styled from "styled-components";
//현재 컴포넌트에서 필수적으로 가져야할 Props

const PostErrorAlert = styled(Alert)`
  top: 8vh;
`;

class ChallengeAddContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: parseInt(sessionStorage.getItem("uid")),
      familyId: sessionStorage.getItem("familyId")
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const values = queryString.parse(this.props.location.search);
    console.log(Object.values(values));
    const { ChallengeAddActions, members, challengeList } = this.props;
    ChallengeAddActions.setDates(
      Object.values(values).filter(elem => elem !== "")
    );
    if (members.length === 0 && challengeList.length === 0) {
      ChallengeAddActions.postDateList(
        this.state.familyId,
        Object.values(values).filter(elem => elem !== "")
      );
    }
  }

  componentWillUnmount() {
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.initStateAction();
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { ChallengeAddActions, activeTopButton } = this.props;

    const currentYPos = window.pageYOffset;
    if (currentYPos > 0) {
      if (!activeTopButton) ChallengeAddActions.setActiveTopButton(true);
    } else {
      if (activeTopButton) ChallengeAddActions.setActiveTopButton(false);
    }
  };

  handleSelectMembers = id => {
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.selectMembers(id);
  };

  handleSelectChallenge = id => {
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.selectChallenge(id);
  };

  handleOnOpen = () => {
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.toggleVisible(true);
  };
  handleOnClose = () => {
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.toggleVisible(false);
  };
  handleInputChange = e => {
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.setText(e.target.value);
  };

  handleScrollTop = () => {
    window.scrollBy({
      top: -window.pageYOffset,
      left: 0,
      behavior: "smooth"
    });
  };

  handleSubmit = () => {
    const {
      ChallengeAddActions,
      members,
      challengeId,
      text,
      dates
    } = this.props;
    const participatntFK = members
      .filter(member => member.done === true)
      .map(member => member.uid);

    const challengeIdFK = challengeId;
    const resolution = text;
    const registeredDate = dates;

    ChallengeAddActions.postChallengeRegist(
      participatntFK,
      challengeIdFK,
      this.state.userId,
      this.state.familyId,
      resolution,
      registeredDate,
      this.props.history
    );
  };

  render() {
    console.log("render!!");
    const {
      members,
      dates,
      challengeList,
      challengeId,
      visible,
      text,
      activeTopButton,
      loading,
      error,
      postError
    } = this.props;
    const selectedMembers = members.filter(elem => elem.done === true);
    const disable =
      challengeId === -1 ? true : selectedMembers.length === 0 ? true : false;

    if (error) return <div>Error!!!</div>;

    return (
      <Spin tip="Loading..." spinning={loading} size="large">
        {postError && (
          <PostErrorAlert
            message="Error"
            description="챌린지 등록에 실패 하였습니다."
            type="error"
            showIcon
            closable
          />
        )}
        <ChallengeAdd
          dates={dates}
          members={members}
          visible={visible}
          text={text}
          disable={disable}
          selectedMembers={selectedMembers}
          challengeList={challengeList}
          challengeId={challengeId}
          activeTopButton={activeTopButton}
          onOpen={this.handleOnOpen}
          onClose={this.handleOnClose}
          onChange={this.handleInputChange}
          onSelectChallenge={this.handleSelectChallenge}
          onSelectMembers={this.handleSelectMembers}
          onTop={this.handleScrollTop}
          onSubmit={this.handleSubmit}
        />
      </Spin>
    );
  }
}

const mapStateToProps = ({ challengeAdd }) => ({
  members: challengeAdd.members,
  dates: challengeAdd.dates,
  challengeList: challengeAdd.challengeList,
  challengeId: challengeAdd.challengeId,
  visible: challengeAdd.visible,
  text: challengeAdd.text,
  activeTopButton: challengeAdd.activeTopButton,
  loading: challengeAdd.loading,
  error: challengeAdd.error,
  postError: challengeAdd.postError
});
const mapDispatchToProps = dispatch => ({
  ChallengeAddActions: bindActionCreators(challengeAddActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeAddContainer);
