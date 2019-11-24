import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import questionMark from "../../images/questionMark.png";

const BackTapContainer = styled.div`
  width: 100vw;
  height: 8vh;
  padding-left: 7%;
  padding-right: 7%;
  display: flex;
  align-items: center;
  letter-spacing: -0.02em;
  color: #434444;
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  z-index: 1;
`;

const BackButton = styled.div`
  width: 10%;
  height: 20px;
  align-items: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #000000;
`;
const TitleBlock = styled.div`
  width: 55%;
  height: 24px;
  position: relative;
  top: 0;
  left: 3%;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    align-items: center;
    letter-spacing: -0.02em;
    color: #434444;
  }
`;

const QuestionMarkBlock = styled.div`
  position: relative;
  top: 0;
  left: 26%;
  width: 20px;
  height: 20px;
  transform: translate(50%, 0);
  img {
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
`;

function BackTap({ title, targetRouter, questionRouter }) {
  return (
    <BackTapContainer>
      <Link to={targetRouter}>
        <BackButton>
          <MdArrowBack />
        </BackButton>
      </Link>
      <TitleBlock>
        <span>{title}</span>
      </TitleBlock>

      <QuestionMarkBlock>
        <Link to={questionRouter}>
          <img src={questionMark} alt="QnA" />
        </Link>
      </QuestionMarkBlock>
    </BackTapContainer>
  );
}

export default BackTap;