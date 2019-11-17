import React, { Fragment } from "react";
import logoImage from "../../images/logo2.png";
import questionMark from "../../images/questionMark.png";
import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

// Headers Components
const Headers = styled(Header)`
  width: 100vw;
  height: 8vh !important;
  line-height: 10px !important;
  background: white !important;
  padding: 0 15px !important;
  margin-right: 0;
  && {
  }
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Logo = styled.div``;

const QuestionMark = styled.span`
  float: right;
  margin-top: 15px;
  margin-right: 10px;
`;

const LogoImage = styled.img`
  width: 20%;
  position: absolute;
  top: -15.5%;
`;

const QuestionImage = styled.img``;
// Contents Components

const HeaderLayout = ({ mainRouter, questionRouter }) => {
  return (
    <Fragment>
      <Headers>
        <Logo>
          <LogoImage src={logoImage} alt="default" onClick={mainRouter} />
          <QuestionMark>
            <QuestionImage
              src={questionMark}
              alt="default"
              height="100%"
              width="100%"
              onClick={questionRouter}
            />
          </QuestionMark>
        </Logo>
      </Headers>
    </Fragment>
  );
};

export default HeaderLayout;
