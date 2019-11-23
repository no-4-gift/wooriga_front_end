import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

function ChallengeShowDates({ dates }) {
  const rowCount = Math.ceil(dates.length / 2);
  return (
    <DateList count={rowCount}>
      {dates.map((elem, index) => (
        <DateItem key={index}>
          <span>{elem}</span>
        </DateItem>
      ))}
    </DateList>
  );
}

ChallengeShowDates.propTypes = {
  dates: PropTypes.array.isRequired
};

export default React.memo(ChallengeShowDates);

//챌린지 신청 날짜 섹션 Style

const DateList = styled.div`
  margin-top: 11px;
  width: 100%;
  display: grid;
  grid-template-rows: repeat(${props => props.count}, 50px);
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
`;
const DateItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 20px;
    color: #777777;
  }
`;
