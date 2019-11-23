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
          key={elem.id}
          id={elem.id}
          title={elem.title}
          select={elem.id === challengeId ? true : false}
          content={elem.content}
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
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
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
