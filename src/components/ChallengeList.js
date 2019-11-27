import React from "react";
import styled from "styled-components";

import PropTypes from "prop-types";
import ChallengeCard from "./ChallengeCard";

function ChallengeList({
  challengeList,
  challengeId,
  onSelectChallenge,
  dates
}) {
  const dateLength = dates.length;
  return (
    <ChallengeListWrapper>
      {challengeList.map(elem => (
        <ChallengeCard
          key={elem.challengeId}
          id={elem.challengeId}
          title={elem.title}
          select={elem.challengeId === challengeId ? true : false}
          summary={elem.summary === null ? "제공 준비중" : elem.summary}
          image={elem.challengeImages.image}
          datesLength={dateLength}
          onSelectChallenge={onSelectChallenge}
        />
      ))}
    </ChallengeListWrapper>
  );
}

ChallengeList.propTypes = {
  challengeList: PropTypes.arrayOf(
    PropTypes.shape({
      challengeId: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string,
      summary: PropTypes.string,
      image: PropTypes.string
    })
  ),
  challengeId: PropTypes.number.isRequired,
  onSelectChallenge: PropTypes.func.isRequired,
  dates: PropTypes.array.isRequired
};

export default ChallengeList;

const ChallengeListWrapper = styled.div`
  width: 100%;
  margin-top: 10px;
`;
