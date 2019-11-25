import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyChallenge from '../components/myChallenge';
import { bindActionCreators } from 'redux';
import * as myChallengeAction from "../store/modules/mychallenge";

const familyId = "wooriga";
const uid = 1615409;

class myChallengeContainer extends Component {

    componentDidMount = () => {
        const { MyChallengeActions, challenger_challenges, participation_challenges } = this.props;
        MyChallengeActions.onGetChallenger(familyId, uid);
        MyChallengeActions.onGetParticipation(familyId, uid);
        
        console.log('challenger_challenges :',challenger_challenges)
        console.log('participation_challenges : ',participation_challenges)

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
        const { challenger_challenges, participation_challenges} = this.props;
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
const mapStateToProps = ({mychallenge}) => ({
    loading : mychallenge.loading,
    challenger_challenges : mychallenge.challenger_challenges,
    participation_challenges : mychallenge.participation_challenges,
    error : mychallenge.error 
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = dispatch => {
   return { MyChallengeActions : bindActionCreators(myChallengeAction, dispatch) }
};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(myChallengeContainer);