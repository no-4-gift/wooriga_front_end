import React, { Component } from 'react';
import { connect } from 'react-redux';
import MyChallenge from '../components/myChallenge';

class myChallengeContainer extends Component {

    detailRouter = () => {
        console.log("Detail Routers");
        this.props.history.push('mychallenge_detail');
    };

    bottomDetailRouterOne = () => {
        console.log("Bottom Detail Routers One");
        this.props.history.push('mychallenge_detail');
    }
    bottomDetailRouterTwo = () => {
        console.log("Bottom Detail Routers Two");
        this.props.history.push('mychallenge_detail');
    }
    render() {
        
        return (
            <MyChallenge
                detailRouter={this.detailRouter}
                bottomDetailRouterOne={this.bottomDetailRouterOne}
                bottomDetailRouterTwo={this.bottomDetailRouterOne}
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