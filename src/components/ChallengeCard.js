import React from "react";
import styled, { css } from "styled-components";
import { MdToday } from "react-icons/md";
import PropTypes from "prop-types";

function ChallengeCard({
  id,
  select,
  title,
  content,
  datesLength,
  onSelectChallenge
}) {
  console.log("ChallengeCard Render");
  return (
    <ChallengeCardWrapper select={select} onClick={() => onSelectChallenge(id)}>
      <ChallengeImg src={""} />
      <ChallengeBody>
        <ChallengeTitle>
          <span>{title}</span>
        </ChallengeTitle>
        <ChallengeDate>
          <span style={{ fontSize: "14px", lineHeight: "14px" }}>
            <MdToday />
          </span>
          <span>&nbsp;{datesLength}일</span>
        </ChallengeDate>
        <ChallengeContent>
          <p>{content}</p>
        </ChallengeContent>
      </ChallengeBody>
    </ChallengeCardWrapper>
  );
}

ChallengeCard.propTypes = {
  id: PropTypes.number.isRequired,
  select: PropTypes.bool.isRequired,
  onSelectChallenge: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  datesLength: PropTypes.number.isRequired
};

export default React.memo(ChallengeCard);

const ChallengeCardWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 120px;
  background: #ffffff;
  ${props =>
    props.select === true &&
    css`
      background: rgba(235, 99, 99, 0.2);
      border: 2px solid #eb6363;
    `}
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  & + & {
    margin-top: 1rem;
  }
`;

const ChallengeImg = styled.div`
  height: 100%;
  flex: 0.25;
  border-radius: 14px 0 0 14px;
  box-sizing: border-box;
  background-color: gray;
  background-image: url(${props => props.src});
`;
const ChallengeBody = styled.div`
  padding: 1em;
  height: 100%;
  flex: 0.75;
`;

const ChallengeTitle = styled.div`
  width: 100%;
  height: 22px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 23px;
    letter-spacing: -0.02em;
    display: flex;
    align-items: center;
    color: #434444;
  }
`;
const ChallengeDate = styled.div`
  width: 100%;
  height: 18px;
  display: flex;
  align-items: center;
  margin-top: 8px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.02em;
    color: #434444;
  }
`;

const ChallengeContent = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  p {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
`;
