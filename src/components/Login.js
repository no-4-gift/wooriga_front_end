import React from "react";
import KakaoLogin from "react-kakao-login";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

function Login({ responseKakao, responseFail }) {
  return (
    <Container>
      <Logo>
        <img
          width="100%"
          height="100%"
          src="https://postfiles.pstatic.net/MjAxOTA5MjlfNTUg/MDAxNTY5NzI5MzEyMDUw.Cyemz7m0P9zbbmhuZC1nTd4trZLzc5_ow8-J3asf-JYg.zV6ryRUDGbvCkV1uAXljaeqiVuCx7BCbm1II73lgT7cg.PNG.bigangel123/logo.PNG?type=w773"
          alt="logo"
        />
      </Logo>
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
          src="https://postfiles.pstatic.net/MjAxOTA5MjlfMjkw/MDAxNTY5NzI3MDIxMzU0.ai-tv2mHjtuM0h8vDGd8wEqEKiAD7Z561PITEpoMxVcg.jxGeQQ2_BgZcwSQvVg0R1bAdSh1vAyL4pDNs3uqhyjUg.PNG.bigangel123/kakao_account_login_btn_medium_wide.png?type=w773"
          alt="kakaobutton"
        />
      </KakaoButton>
      <Inform>
        {"즐겁게 도전하라!\n가족들과 함께하는 추억 만들기"
          .split("\n")
          .map((line, index) => {
            return (
              <span key={index}>
                {line}
                <br />
              </span>
            );
          })}
      </Inform>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ffffff;
  margin: 0 auto;
`;

const Logo = styled.div`
  text-align: center;
  margin: 24px 0 12px 0;
`;

const KakaoButton = styled(KakaoLogin)`
  position: relative;
  display: flex;
  width: 100%;
  height: 50px;
  top: 20%;
  border: none;
  background: center;
  padding-left: 1em;
`;

const Inform = styled.div`
  position: absolute;
  width: 100%;
  height: 50px;
  top: 337px;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  content: center;
  color: #111111;
`;

export default withRouter(Login);
