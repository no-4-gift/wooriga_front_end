import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";

import PropType from "prop-types";

const TitleBlackTxt = styled.text`
  font-size: 27px;
  margin: 0 0.5%;
  font-weight: bold;
`;
const TitleRedTxt = styled.text`
  font-size: 27px;
  color: #eb6363;
  font-weight: bold;
`;

const CloseTxt = styled.text`
  float: right;
  font-size: 21px;
  margin: 0 5%;
  color: #eb6363;
`;
const SaveTxt = styled.text`
  float: left;
  font-size: 21px;
  margin: 0 5%;
`;
const ContentText = styled.text`
  font-size: large;
`;

const ChangeLeaderName = styled.text`
  text-align: center;
  margin: 0 3% 0 3%
  font-size: large;
  color: #eb6363;
`;

// 화면을 불투명하게 해줍니다.
const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(123, 123, 123, 0.8);
  overflow: hidden;
  opacity: 0;
  transition: 0.25s linear;
  z-index: -1;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      z-index: 2;
    `}
`;

const ModalTemplate = styled.div`
  background-color: white;
  position: fixed;
  height: auto;
  height: 14rem;
  width: 20rem;
  padding: 2rem;
  top: 50%;
  left: 50%;
  transform: translate(100%, 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  ${props =>
    props.visible &&
    css`
      transform: translate(-50%, -50%);
      z-index: 15;
    `}
`;

function LeaderChangeModal({
  visible,
  members,
  onClose,
  leaderId,
  onChangeLeader,
  familyId
}) {
  const leaderInfo = members.filter(member => member.uid === leaderId);
  let uid = members.map(member => member.uid)[0];
  let chiefId = leaderId;
  console.log("LeaderChangeModal-----------");
  console.log(members);
  console.log(familyId);
  console.log(uid);
  console.log(chiefId);
  console.log("LeaderChangeModal-----------");

  return (
    <ModalBackground visible={visible}>
      <ModalTemplate visible={visible}>
        <TitleBlackTxt>가장을 </TitleBlackTxt>
        <TitleRedTxt>위임</TitleRedTxt>
        <TitleBlackTxt>합니다.</TitleBlackTxt>
        <br />
        <br />
        <ContentText>정말</ContentText>
        {members
          .filter(member => member.uid === leaderId)
          .map(elem => {
            return (
              <>
                <ChangeLeaderName>
                  {elem.name} | {elem.relationship}
                </ChangeLeaderName>
                <ContentText>
                  님에게 관리자(가장)를 위임하시겠습니까?
                </ContentText>
                <br />
                <br />
              </>
            );
          })}
        <SaveTxt onClick={() => onChangeLeader(chiefId)}>네</SaveTxt>
        <CloseTxt onClick={onClose}>아니오</CloseTxt>
      </ModalTemplate>
    </ModalBackground>
  );
}
//}

LeaderChangeModal.propTypes = {
  members: PropType.isRequired,
  leaderId: PropType.isRequired,
  familyId: PropType.isRequired,
  visible: PropType.bool,
  onClose: PropType.isRequired,
  onChangeLeader: PropType.isRequired
};

export default LeaderChangeModal;
