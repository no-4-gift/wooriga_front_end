import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Invite from "../components/Invite";
import * as authActions from "../store/modules/auth";
import { Redirect } from "react-router-dom";
class InviteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  routeChange = () => {
    this.props.history.push("/");
  }
  render() {
    const { firstLogin } = this.props;
    if(firstLogin) {
        console.log("first Login");
        return (
            <Invite 
                routeChange={this.routeChange}
            />
        );
    }
    else {
        console.log("first Login Error");
        return (
            <Redirect to="/" />
        );
    }
    
    
  }
}
const mapStateToProps = ({ auth }) => ({
    firstLogin: auth.firstLogin
});

const mapDispatchProps = dispatch => ({
    AuthActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(InviteContainer);
