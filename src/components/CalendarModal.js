import React from "react";
import styled, { css } from "styled-components";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
import { MdClose } from "react-icons/md";
import PropTypes from "prop-types";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background: rgba(123, 123, 123, 0.8);
  overflow: hidden;
  opacity: 0;
  transition: all 0.25s linear;
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
  transition: all 0.5s ease-in;

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

const Section = styled.div`
  width: 100%;
  & + & {
    margin-top: 14px;
  }
`;
const SectionTitle = styled.div`
  width: 100%;
  height: 34px;
  padding: 6px 56px 10px 24px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: -0.02em;

    color: #434444;
  }
`;

const SectionBody = styled.div`
  width: 100%;
`;

//챌린지 목록 스타일

const ChallengeItem = styled.div`
  position: relative;
  width: 100%;
  height: 64px;
  background: #fafafa;
  border: 1px solid #f5f5f5;
`;

const ChallengeIcon = styled.div`
  position: absolute;
  left: 24px;
  top: 22px;
  width: 20px;
  height: 20px;
  background: #eb6363;
  border-radius: 4px;
  text-align: center;
`;
const ChallengeContent = styled.div`
  position: absolute;
  top: 13px;
  left: 63px;
  width: 168px;
  display: flex;
  flex-direction: column;
`;
const ChallengeContentTitle = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;

  color: #434444;
`;

const ChallengeContentDates = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;

  color: #434444;
`;
const ChallengeMaker = styled.div`
  position: absolute;
  top: 14px;
  right: 24px;
  width: 36px;
  height: 36px;
  ${profileColor}
  box-sizing: border-box;
  border-radius: 20px;
  background-image: url(${props => props.profile});
  background-size: contain;

  &::before {
    content: "|";

    position: relative;
    left: -20px;
    top: -14px;
    font-size: 36px;
    color: #ededed;
  }
`;

//일정이 비어있는 멤버들 스타일

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
  background-image: url(${props => props.profile});
  background-size: contain;
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
// const CancleButton = styled.div`
//   font-family: Noto Sans KR;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 18px;
//   line-height: 26px;
//   letter-spacing: -0.02em;
//   color: #969696;
//   flex: 0.9;
// `;
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
  members,
  visible,
  dates,
  challengeBarInfo,
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
  let thisDateMembers = dates.filter(elem => elem.emptyDate === selectDate);
  const myIdx = thisDateMembers.findIndex(elem => elem.id === id);
  if (myIdx !== -1) {
    let temp = thisDateMembers[0];
    thisDateMembers[0] = thisDateMembers[myIdx];
    thisDateMembers[myIdx] = temp;
  }
  const thisDateChallenge = challengeBarInfo.filter(
    elem => elem.date.findIndex(elem => elem === selectDate) !== -1
  );
  console.log(thisDateChallenge);

  return (
    <DarkBackGround visible={visible}>
      <ModalTemplate visible={visible}>
        <ModalHead>
          <Title>일정 확인</Title>
          <DateText>{selectDate}</DateText>
        </ModalHead>
        <ModalBody>
          {thisDateChallenge.length > 0 && (
            <Section>
              <SectionTitle>
                <span>해야할 챌린지</span>
              </SectionTitle>
              <SectionBody>
                {thisDateChallenge.map((elem, index) => (
                  <ChallengeItem key={index}>
                    <ChallengeIcon>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13V6.77778M1 6.77778V1H6.65217V2.77778H11V9H6.65217V6.77778H1Z"
                          stroke="white"
                        />
                      </svg>
                    </ChallengeIcon>
                    <ChallengeContent>
                      <ChallengeContentTitle>
                        <span>{elem.challengeTitle}</span>
                      </ChallengeContentTitle>
                      <ChallengeContentDates>
                        <span>
                          {selectDate}{" "}
                          {elem.date.length > 1
                            ? `+(${elem.date.length - 1})`
                            : ""}
                        </span>
                      </ChallengeContentDates>
                    </ChallengeContent>
                    <ChallengeMaker
                      profile={
                        members[
                          members.findIndex(
                            member => member.uid === elem.chiefId
                          )
                        ].profile
                      }
                      color={elem.chiefColor}
                    />
                  </ChallengeItem>
                ))}
              </SectionBody>
            </Section>
          )}
          <Section>
            <SectionTitle>
              <span>함께 할 수 있는 가족</span>
            </SectionTitle>
            <SectionBody>
              {thisDateMembers.map(elem => (
                <ModalItemBlock key={elem.uid}>
                  <MemberProfilePhoto
                    profile={elem.profile}
                    color={elem.color}
                  />
                  <MemberProfile>
                    <MemberNameContainer>
                      <MemerProfileName>{elem.name}</MemerProfileName>
                      <MemberColorCircle color={elem.color} />
                    </MemberNameContainer>
                    <MemberRelationText>
                      관계 : {elem.relationship}
                    </MemberRelationText>
                  </MemberProfile>
                  {elem.id === id && (
                    <DeleteButton onClick={() => onDelete(selectDate)}>
                      <MdClose />
                    </DeleteButton>
                  )}
                </ModalItemBlock>
              ))}
            </SectionBody>
          </Section>

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
  id: PropTypes.number,
  members: PropTypes.array,
  visible: PropTypes.bool,
  dates: PropTypes.array,
  challengeBarInfo: PropTypes.array,
  onCancle: PropTypes.func,
  onDelete: PropTypes.func,
  onInsert: PropTypes.func,
  selectDate: PropTypes.string
};
