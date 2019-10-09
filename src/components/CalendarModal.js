import React from "react";
import styled, { css } from "styled-components";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
import { MdClose } from "react-icons/md";

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background: rgba(123, 123, 123, 0.8);
  overflow: hidden;
`;

const ModalTemplate = styled.div`
  width: 100vw;
  background-color: white;
  z-index: 2;
  position: fixed;
  left: 0;
  bottom: 0;
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

  background: gray;
  border: 1px solid #eb6363;
  box-sizing: border-box;
  border-radius: 30px;
`;

const MemberProfile = styled.div`
  position: relative;
  left: 21px;
  top: 5px;
  width: 100px;
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
  left: 140px;
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

function CalendarModal({ visible }) {
  return (
    <DarkBackGround>
      <ModalTemplate>
        <ModalHead>
          <Title>일정 확인</Title>
          <DateText>2019-10-09</DateText>
        </ModalHead>
        <ModalBody>
          <ModalItemBlock>
            <MemberProfilePhoto />
            <MemberProfile>
              <MemberNameContainer>
                <MemerProfileName>이승준</MemerProfileName>
                <MemberColorCircle color={"red"} />
              </MemberNameContainer>
              <MemberRelationText>관계 : 나</MemberRelationText>
            </MemberProfile>
            <DeleteButton>
              <MdClose />
            </DeleteButton>
          </ModalItemBlock>
          <ModalItemBlock>
            <MemberProfilePhoto />
            <MemberProfile>
              <MemberNameContainer>
                <MemerProfileName>타노스</MemerProfileName>
                <MemberColorCircle color={"blue"} />
              </MemberNameContainer>
              <MemberRelationText>관계 : 우주빌런</MemberRelationText>
            </MemberProfile>
          </ModalItemBlock>

          <ModalItemBlock>
            <MemberProfilePhoto />
            <MemberProfile>
              <MemberNameContainer>
                <MemerProfileName>타노스</MemerProfileName>
                <MemberColorCircle color={"blue"} />
              </MemberNameContainer>
              <MemberRelationText>관계 : 우주빌런</MemberRelationText>
            </MemberProfile>
          </ModalItemBlock>
          <ModalItemBlock>
            <MemberProfilePhoto />
            <MemberProfile>
              <MemberNameContainer>
                <MemerProfileName>타노스</MemerProfileName>
                <MemberColorCircle color={"blue"} />
              </MemberNameContainer>
              <MemberRelationText>관계 : 우주빌런</MemberRelationText>
            </MemberProfile>
          </ModalItemBlock>
          <InsertScheduleContainer>
            <InsertButton>
              <MdClose />
            </InsertButton>
            <InsertText>함께 할 시간 등록하기</InsertText>
          </InsertScheduleContainer>
        </ModalBody>
        <ModalFooter>
          <CancleButton>취소</CancleButton>
          <OkButton>확인</OkButton>
        </ModalFooter>
      </ModalTemplate>
    </DarkBackGround>
  );
}

export default CalendarModal;
