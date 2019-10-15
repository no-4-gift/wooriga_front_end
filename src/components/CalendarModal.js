import React from "react";
import styled, { css } from "styled-components";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
import { MdClose } from "react-icons/md";
import PropType from "prop-types";

const DarkBackGround = styled.div`
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
  width: 100vw;
  background-color: white;

  position: fixed;
  left: 0;
  bottom: 0;
  transform: translate(0, 100%);
  transition-delay: 0.25s;
  transition: 0.5s ease-in;

  ${props =>
    props.visible &&
    css`
      transform: translate(0, 0);
      z-index: 3;
    `}
`;

const ModalHead = styled.div`
  border-bottom: 1px solid #ededed;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  flex: 0.9;
  color: #434444;
`;
const DateText = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: -0.02em;

  color: #969696;
`;

const ModalBody = styled.div`
  width: 100%;
  max-height: 50vh;
  overflow: auto;
`;
const ModalItemBlock = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  border-bottom: 1px solid #ededed;
  padding: 1em;
`;
const MemberProfilePhoto = styled.div`
  width: 60px;
  height: 60px;
  ${profileColor}

  box-sizing: border-box;
  border-radius: 30px;
`;

const MemberProfile = styled.div`
  position: relative;
  left: 21px;
  top: 5px;
  width: 150px;
  height: 60px;
`;

const MemberNameContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
const MemerProfileName = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #434444;
  flex: 0.7;
`;
const MemberColorCircle = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;

  ${colorSelector}
`;
const MemberRelationText = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: -0.02em;
  margin-top: 8px;
  color: #434444;
`;

const ModalFooter = styled.div`
  display: flex;
  padding: 1em;
  align-items: center;
  justify-content: center;
`;
const CancleButton = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #969696;
  flex: 0.9;
`;
const OkButton = styled.div`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;
  color: #eb6363;
`;

const DeleteButton = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 100%;
  border: 1px solid gray;

  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: 5px;
  left: 90px;
`;

const InsertScheduleContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 1em;
`;
const InsertButton = styled.div`
  position: relative;

  width: 30px;
  height: 30px;
  border-radius: 100%;
  border: 1px solid gray;

  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(45deg);
`;

const InsertText = styled.span`
  position: relative;
  left: 24px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.02em;

  color: #969696;
`;

function CalendarModal({
  id,
  visible,
  dates,
  onCancle,
  onDelete,
  onInsert,
  selectDate
}) {
  const isMysdate =
    dates
      .filter(elem => elem.id === id)
      .findIndex(elem => elem.date === selectDate) === -1
      ? false
      : true;
  let thisDateMembers = dates.filter(elem => elem.date === selectDate);
  const myIdx = thisDateMembers.findIndex(elem => elem.id === id);
  if (myIdx !== -1) {
    let temp = thisDateMembers[0];
    thisDateMembers[0] = thisDateMembers[myIdx];
    thisDateMembers[myIdx] = temp;
  }

  return (
    <DarkBackGround visible={visible}>
      <ModalTemplate visible={visible}>
        <ModalHead>
          <Title>일정 확인</Title>
          <DateText>{selectDate}</DateText>
        </ModalHead>
        <ModalBody>
          {thisDateMembers.map(elem => (
            <ModalItemBlock key={elem.id}>
              <MemberProfilePhoto color={elem.color} />
              <MemberProfile>
                <MemberNameContainer>
                  <MemerProfileName>{elem.name}</MemerProfileName>
                  <MemberColorCircle color={elem.color} />
                </MemberNameContainer>
                <MemberRelationText>관계 : {elem.relation}</MemberRelationText>
              </MemberProfile>
              {elem.id === id && (
                <DeleteButton onClick={() => onDelete(selectDate)}>
                  <MdClose />
                </DeleteButton>
              )}
            </ModalItemBlock>
          ))}

          {!isMysdate && (
            <InsertScheduleContainer onClick={() => onInsert(selectDate)}>
              <InsertButton>
                <MdClose />
              </InsertButton>
              <InsertText>함께 할 시간 등록하기</InsertText>
            </InsertScheduleContainer>
          )}
        </ModalBody>
        <ModalFooter>
          <OkButton onClick={onCancle}>확인</OkButton>
        </ModalFooter>
      </ModalTemplate>
    </DarkBackGround>
  );
}

export default CalendarModal;

CalendarModal.propTypes = {
  id: PropType.number,
  visible: PropType.bool,
  dates: PropType.array,
  onCancle: PropType.func,
  onDelete: PropType.func,
  onInsert: PropType.func,
  selectDate: PropType.func
};
