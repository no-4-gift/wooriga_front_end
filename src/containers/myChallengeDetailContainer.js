import React, { Component } from 'react';
// import { connect } from 'react-redux';
import MyChallengeDetail from '../components/myChallengeDetail';

class myChallengeDetailContainer extends Component {

    backRouter = () => {
        console.log("backRouter");
        this.props.history.push('mychallenge');
    }
    render() {
        return (
            <MyChallengeDetail
            backRouter={this.backRouter}
            
            
            />
        );
    }
}


// // store에 있는 counter의 initalState를 가져온다.
// const mapStateToProps = ({ counter }) => ({
//     color: counter.color,
//     number: counter.number,
//   });
  
  
//   // **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
//   const mapDispatchToProps = { increment, decrement };
  
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(CounterContainer);
export default myChallengeDetailContainer;