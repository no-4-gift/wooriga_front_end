import React from "react";
import KakaoLogin from "react-kakao-login";
import { withRouter } from "react-router-dom";
import { Layout, Typography } from "antd";
import logoImage from "../images/logo2.png";
import kakaobuttonpng from "../images/kakaobutton.png";
import styled from "styled-components";
const { Content } = Layout;
const { Text } = Typography;

function Login({ responseKakao, responseFail }) {
  return (
    <Layout style={{ minHeight: "100vh", background: "white" }}>
      <Content style={{ margin: "0 16px" }}>
        <img
          src={logoImage}
          alt="logo"
          style={{
            margin: "22vh 0px 8vh 14vh"
          }}
        />
        <br />

        <div style={{ textAlign: "center" }}>
          <Text style={{ fontSize: "large" }}>즐겁게 도전하라!</Text>
          <br />
          <Text strong style={{ fontSize: "large" }}>
            가족들과 함께하는 추억만들기
          </Text>
        </div>
        <br />
        <br />
        <br />
        <div>
          <KakaoButton
            jsKey={"84b358f5c1cd46c9190e1d6299fdb79b"}
            buttonText="Kakao"
            onSuccess={responseKakao}
            onFailure={responseFail}
            getProfile="true"
          >
            <img
              width="100%"
              height="100%"
              src={kakaobuttonpng}
              alt="kakaobutton"
            />
          </KakaoButton>
        </div>
      </Content>
    </Layout>
  );
}

const KakaoButton = styled(KakaoLogin)`
  border: none;
  background: center;
`;

export default withRouter(Login);
