import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyChallenge from '../components/myChallenge';

class myChallengeContainer extends Component {

    detailRouter = (detailProps) => {
        console.log("Detail Routers", detailProps);
        window.location.assign('/mychallenge_detail');
    };

    bottomDetailRouter = (bottomProps) => {
        console.log("Bottom Detail Routers One", bottomProps);
        window.location.assign('/mychallenge_detail');
    }

    render() {
        
        return (
            <MyChallenge
                detailRouter={this.detailRouter}
                bottomDetailRouter={this.bottomDetailRouter}
                
            />
        );
    }
}


// store에 있는 counter의 initalState를 가져온다.
const mapStateToProps = () => ({
});
  
  
// **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = {};
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(myChallengeContainer);