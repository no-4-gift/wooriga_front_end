import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyChallenge from '../components/myChallenge';
import { bindActionCreators } from 'redux';
import * as myChallengeAction from "../store/modules/mychallenge";

const familyId = "wooriga";
const uid = 1615409;

class myChallengeContainer extends Component {

    componentDidMount() {
        const { loading, challenger_challenges, participation_challenges, erorr, MyChallengeActions } = this.props;
        MyChallengeActions.onGetChallenger(familyId, uid);
        MyChallengeActions.onGetParticipation(familyId, uid);
      }
      
    detailRouter = (detailProps) => {
        console.log("Detail Routers", detailProps);
        window.location.assign('/mychallenge_detail');
    };

    bottomDetailRouter = (bottomProps) => {
        console.log("Bottom Detail Routers One", bottomProps);
        window.location.assign('/mychallenge_detail');
    }

    render() {
        const { loading, challenger_challenges, participation_challenges, erorr, MyChallengeActions } = this.props;
        
        console.log('challenger_challenges', challenger_challenges)
        console.log('participation_challenges', participation_challenges)
        return (
            <MyChallenge
                detailRouter={this.detailRouter}
                bottomDetailRouter={this.bottomDetailRouter}
                
            />
        );
    }
}

// store에 있는 counter의 initalState를 가져온다.
const mapStateToProps = (myChallenge) => ({

    loading : myChallenge.loading,
    challenger_challenges : myChallenge.challenger_challenges,
    participation_challenges : myChallenge.participation_challenges,
    error : myChallenge.error 
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = dispatch => ({
    MyChallengeActions : bindActionCreators(myChallengeAction, dispatch)
});
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(myChallengeContainer);