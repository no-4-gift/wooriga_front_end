import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdDone } from "react-icons/md";
import { profileColor } from "../styleUtils/colorStyle";

function ChallengeMembers({ members, onSelectMembers }) {
  console.log("test ChallengeMembers");
  return (
    <ShowMembersContent>
      <ShowMembersContainer>
        {members.map(elem => (
          <MemberWrapper onClick={() => onSelectMembers(elem.id)} key={elem.id}>
            <Member src={elem.thumbnail} color={elem.color} />
            {elem.done && (
              <MemberCheck>
                <MdDone />
              </MemberCheck>
            )}
          </MemberWrapper>
        ))}
      </ShowMembersContainer>
    </ShowMembersContent>
  );
}

ChallengeMembers.propTypes = {
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      relation: PropTypes.string,
      color: PropTypes.string,
      thumbnail: PropTypes.string
    })
  ),
  onSelectMembers: PropTypes.func.isRequired
};

export default React.memo(ChallengeMembers);

const ShowMembersContent = styled.div`
  margin-top: 10px;
  width: 100%;
  margin-top: 16px;
  overflow: auto;
  padding: 1%;
`;
const ShowMembersContainer = styled.div`
  display: flex;
  min-width: fit-content;
`;

const MemberWrapper = styled.div`
  margin-right: 14px;
  width: 50px;
  height: 50px;
  &:last-child {
    margin: 0;
  }
`;
const Member = styled.div`
  width: 100%;
  height: 100%;
  ${profileColor}
  background-image: url(${props => props.src});
  box-sizing: border-box;
  border-radius: 30px;
`;
const MemberCheck = styled.div`
  position: relative;
  left: 0;
  top: -100%;
  border-radius: 30px;
  width: 100%;
  height: 100%;
  background: rgba(123, 123, 123, 0.5);
  font-size: 2rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
