import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as challengeAddActions from "../store/modules/challengeAdd";
import ChallengeAdd from "../components/ChallengeAdd";
import queryString from "querystring";

//API 호출로 받아와야하는 정보
const data = [
  {
    id: 1,
    name: "브루스 웨인",
    relation: "아빠",
    color: "red",
    thumbnail: ""
  },
  {
    id: 2,
    name: "할리 퀸",
    relation: "엄마",
    color: "blue",
    thumbnail: ""
  },
  {
    id: 3,
    name: "조커",
    relation: "형",
    color: "green",
    thumbnail: ""
  },
  {
    id: 4,
    name: "데드 샷",
    relation: "나",
    color: "yellow",
    thumbnail: ""
  }
];

const challengeList = [
  {
    id: 1,
    title: "점심 먹기",
    content: "Flexible Box도 훌륭하지만 비교적 단순한 1차원"
  },
  {
    id: 2,
    title: "점심 먹기",
    content: "Flexible Box도 훌륭하지만 비교적 단순한 1차원"
  },
  {
    id: 3,
    title: "점심 먹기",
    content: "Flexible Box도 훌륭하지만 비교적 단순한 1차원"
  },
  {
    id: 4,
    title: "점심 먹기",
    content: "Flexible Box도 훌륭하지만 비교적 단순한 1차원"
  },
  {
    id: 5,
    title: "점심 먹기",
    content: "Flexible Box도 훌륭하지만 비교적 단순한 1차원"
  },
  {
    id: 6,
    title: "점심 먹기",
    content: "Flexible Box도 훌륭하지만 비교적 단순한 1차원"
  }
];

class ChallengeAddContainer extends Component {
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    const values = queryString.parse(this.props.location.search);
    console.log(Object.values(values));
    const { ChallengeAddActions } = this.props;
    ChallengeAddActions.setDates(
      Object.values(values).filter(elem => elem !== "")
    );
    ChallengeAddActions.setMembers(data);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { ChallengeAddActions, activeTopButton } = this.props;
    console.log(window.pageYOffset);

    const currentYPos = window.pageYOffset;
    if (currentYPos > 0) {
      console.log("버튼 생성!");
      if (!activeTopButton) ChallengeAddActions.setActiveTopButton(true);
    } else {
      console.log("버튼 비활성화");
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

  render() {
    console.log("render!!");
    const {
      members,
      dates,
      challengeId,
      visible,
      text,
      activeTopButton
    } = this.props;
    const selectedMembers = members.filter(elem => elem.done === true);
    const disable =
      challengeId === -1 ? true : selectedMembers.length === 0 ? true : false;

    if (!dates) return null;
    return (
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
      />
    );
  }
}

const mapStateToProps = ({ challengeAdd }) => ({
  members: challengeAdd.members,
  dates: challengeAdd.dates,
  challengeId: challengeAdd.challengeId,
  visible: challengeAdd.visible,
  text: challengeAdd.text,
  activeTopButton: challengeAdd.activeTopButton
});
const mapDispatchToProps = dispatch => ({
  ChallengeAddActions: bindActionCreators(challengeAddActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChallengeAddContainer);
