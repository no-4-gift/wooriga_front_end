import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import * as authActions from "../store/modules/auth";
import Login from "../components/Login";
import { Alert } from "antd";

class LoginContainer extends Component {
  //KaKao Login

  componentDidMount() {
    const uid = sessionStorage.getItem("uid");
    console.log(uid);
    const { AuthActions } = this.props;
    if (uid) {
      AuthActions.onLogged();
    }
  }

  responseKakao = res => {
    console.log(res);
    const { AuthActions } = this.props;
    const {
      response: { access_token }
    } = res;
    console.log(access_token);
    AuthActions.onLogin(access_token);
  };

  //Login Fail
  responseFail = err => {
    console.log("실패");
    console.error(err);
    const { AuthActions } = this.props;
    AuthActions.setKakaoError(err);
  };

  render() {
    const { logged, error, kakaoError, firstLogin } = this.props;
    //const uid = sessionStorage.getItem("uid");

    if (logged === true) {
      if (firstLogin === true) {
        return <Redirect to="/invite" />;
      } else {
        return <Redirect to="/" />;
      }
    } else {
      return (
        <Fragment>
          {kakaoError && (
            <Alert
              message="Error"
              description="카카오 로그인에 실패 하셨습니다."
              type="error"
              showIcon
              closable
            />
          )}
          {error && (
            <Alert
              message="Error"
              description="서버 오류"
              type="error"
              showIcon
              closable
            />
          )}
          <Login
            responseKakao={this.responseKakao}
            responseFail={this.responseFail}
          />
        </Fragment>
      );
    }
  }
}

const mapStateToProps = ({ auth }) => ({
  logged: auth.logged,
  kakaoError: auth.kakaoError,
  error: auth.error,
  firstLogin: auth.firstLogin
});
const mapDispatchToProps = dispatch => ({
  AuthActions: bindActionCreators(authActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
