import React, { Component } from "react";
import { connect } from "react-redux";
import MyChallenge from "../components/myChallenge";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from "redux";
import * as myChallengeAction from "../store/modules/mychallenge";

class myChallengeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: parseInt(sessionStorage.getItem("uid")),
      familyId: sessionStorage.getItem("familyId")
    };
  }
  componentDidMount = () => {
    const {
      MyChallengeActions,
      challenger_challenges,
      participation_challenges
    } = this.props;
    MyChallengeActions.onGetChallenger(this.state.familyId, this.state.uid);
    MyChallengeActions.onGetParticipation(this.state.familyId, this.state.uid);

    console.log("challenger_challenges :", challenger_challenges);
    console.log("participation_challenges : ", participation_challenges);
  };

  detailRouter = detailProps => {
    const { challenger_challenges } = this.props;
    this.props.history.push(`/mychallenge_detail/${detailProps}`, {
      flag: "main",
      challenger_challenges: challenger_challenges,
      uid: this.state.uid
    });
  };

  bottomDetailRouter = bottomProps => {
    const { participation_challenges } = this.props;
    this.props.history.push(`/mychallenge_detail/${bottomProps}`, {
      flag: "sub",
      participation_challenges: participation_challenges,
      uid: this.state.uid
    });
  };

  render() {
    const { challenger_challenges, participation_challenges } = this.props;
    return (
      <MyChallenge
        detailRouter={this.detailRouter}
        bottomDetailRouter={this.bottomDetailRouter}
        challenger_challenges={challenger_challenges}
        participation_challenges={participation_challenges}
      />
    );
  }
}

// store에 있는 counter의 initalState를 가져온다.
const mapStateToProps = ({ mychallenge }) => ({
  loading: mychallenge.loading,
  challenger_challenges: mychallenge.challenger_challenges,
  participation_challenges: mychallenge.participation_challenges,
  error: mychallenge.error
});

// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = dispatch => {
  return {
    MyChallengeActions: bindActionCreators(myChallengeAction, dispatch)
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(myChallengeContainer)
);
