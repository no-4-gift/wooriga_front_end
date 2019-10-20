import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import * as loginActions from "../store/modules/login";
import Login from "../components/Login";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    console.log("까꿍");
    this.state = {
      id: "",
      name: ""
    };
  }

  //KaKao Login
  responseKakao = res => {
    this.setState({
      id: res.profile.id,
      name: res.profile.properties.nickname
    });

    this.doSingUp();
    console.log(res.profile.id);
    console.log(res.profile.properties.nickname);
  };

  //Login Fail
  responseFail = err => {
    console.log("실패");
    console.error(err);
  };

  doSingUp = () => {
    const { id, name } = this.state;
    window.sessionStorage.setItem("id", id);
    window.sessionStorage.setItem("name", name);

    const { LoginActions } = this.props;
    LoginActions.onLogin();
    //this.props.history.push("/invite");
  };
  handleLogout = () => {
    const { LoginActions } = this.props;
    LoginActions.onLogout();
  };

  render() {
    const { logged } = this.props;
    const id = window.sessionStorage.getItem("id");
    return (
      <Fragment>
        {logged ? (
          id ? (
            <Redirect to="/" />
          ) : null
        ) : (
          <Login
            responseKakao={this.responseKakao}
            responseFail={this.responseFail}
          />
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = ({ login }) => ({
  logged: login.logged
});
const mapDispatchToProps = dispatch => ({
  LoginActions: bindActionCreators(loginActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
