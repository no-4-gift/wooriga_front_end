import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LoginConatainer from "./containers/LoginContainer";

import myChallengeDetailContainer from "./containers/myChallengeDetailContainer";

import ChosensLayout from "./containers/ChosensContainer";
import "antd/dist/antd.css";

import InviteContainer from "./containers/InviteContainer";
// import MakeGroup from "./components/MakeGroup";
import myPageContainer from "./containers/MyPageContainer";
import myPageDetailContainer from "./containers/MyPageDetailContainer";
//import checkSignUp from "./components/CheckSignUp";
import MakeGroup from "./components/MakeGroup";

import ChallengeAddContainer from "./containers/ChallengeAddContainer";

import styled from "styled-components";
import exceptionInage from "./images/exceptionResolution.PNG";
function App() {
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  if (
    window.innerWidth > 481 ||
    (window.innerWidth === 320 && window.innerHeight === 480)
  ) {
    console.log("호환하지 않음");
  } else {
    console.log("호환^_^");
  }
  // 768 : 1024 아이패드
  return (
    <BrowserRouter>
      {window.innerWidth > 481 ||
      (window.innerWidth === 320 && window.innerHeight === 480) ? (
        <ExceptionLayout>
          <ExceptionImage
            src={exceptionInage}
            alt="excetionImage"
            height="60%"
          />
        </ExceptionLayout>
      ) : (
        <>
          <Route path="/" component={ChosensLayout} exact />
          <Route path="/login" component={LoginConatainer} />
          <Route path="/challenge_regist" component={ChallengeAddContainer} />
          <Route
            path="/mychallenge_detail/:id"
            component={myChallengeDetailContainer}
          />
          <Route path="/invite" component={InviteContainer} />
          <Route path="/mypage_detail" component={myPageDetailContainer} />
          <Route path="/makegroup" component={MakeGroup} />
          <Route path="/mypage" component={myPageContainer} />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;

const ExceptionLayout = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const ExceptionImage = styled.img`
  padding-top: 25vh;
`;
