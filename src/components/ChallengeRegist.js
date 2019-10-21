import React, { Fragment } from "react";
import styled from "styled-components";
import { profileColor } from "../styleUtils/colorStyle";
import { MdKeyboardBackspace, MdToday } from "react-icons/md";

const BackTapContainer = styled.div`
  width: 100vw;
  height: 8vh;
  overflow: hidden;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 4%;
  padding-bottom: 4%;
  font-family: Segoe MDL2 Assets;
  font-size: 24px;
  line-height: 24px;
  color: black;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 42vh;
  padding: 7%;
`;

const Header = styled.div`
  width: 100%;
`;
const HeaderTitle = styled.div`
  width: 100%;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;

    letter-spacing: -0.02em;

    color: #434444;
  }
`;
const HeaderContent = styled.div`
  width: 100%;
  overflow: auto;
`;
const DateContainer = styled.div`
  display: flex;
  padding-top: 1em;
  padding-bottom: 1em;
  min-width: fit-content;
  align-items: center;
`;

const DateBox = styled.div`
  width: 121px;
  height: 40px;
  margin-right: 14px;

  &:last-child {
    margin: 0;
  }
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;

  color: #777777;
`;

const ShowMembers = styled.div`
  width: 100%;
  position: relative;
  left: 0;
  top: 4vh;
`;
const Title = styled.div`
  width: 100%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  display: flex;
  align-items: center;

  color: #434444;
`;
const ShowMembersContent = styled.div`
  width: 100%;
  margin-top: 16px;
  overflow: auto;
`;
const ShowMembersContainer = styled.div`
  display: flex;
  min-width: fit-content;
`;

const Members = styled.div`
  width: 63px;
  height: 60px;
  ${profileColor}
  margin-right: 14px;

  &:last-child {
    margin: 0;
  }
  border: 2px solid #f2994a;
  box-sizing: border-box;
  border-radius: 30px;
`;

const ChallengeContainer = styled.div`
  width: 100vw;
  height: 38vh;
  padding: 6% 6% 0 6%;
  border-top: 1px solid #ededed;
`;
const ChallengeList = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
  margin-top: 27px;
`;
const ChallengeCard = styled.div`
  display: flex;
  width: 97%;
  height: 120px;
  background: #ffffff;
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
  background: gray;
`;
const ChallengeContent = styled.div`
  padding: 1em;
  height: 100%;
  flex: 0.75;
`;

const ChallengeContentTitle = styled.div`
  width: 100%;
  height: 50%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  display: flex;
  align-items: center;
  color: #434444;
`;
const ChallengeContentDate = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;

  color: #434444;
`;

const Footer = styled.footer`
  width: 100vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RegistButton = styled.button`
  width: 312px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #777777;
  box-shadow: 0px 4px 10px rgba(119, 119, 119, 0.2);
  border-radius: 23px;
  border: none;

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

    color: #ffffff;
  }
`;

function ChallengeRegist() {
  return (
    <Fragment>
      <BackTapContainer>
        <MdKeyboardBackspace />
      </BackTapContainer>
      <Wrapper>
        <Header>
          <HeaderTitle>
            <span>챌린지 등록</span>
          </HeaderTitle>
          <HeaderContent>
            <DateContainer>
              <DateBox>2019-10-15</DateBox>
              <DateBox>2019-10-15</DateBox>
              <DateBox>2019-10-15</DateBox>
              <DateBox>2019-10-15</DateBox>
              <DateBox>2019-10-15</DateBox>
            </DateContainer>
          </HeaderContent>
        </Header>
        <ShowMembers>
          <Title>함께할 사람을 선택 해주세요.</Title>
          <ShowMembersContent>
            <ShowMembersContainer>
              <Members color={"red"} />
              <Members color={"red"} />
              <Members color={"red"} />
              <Members color={"red"} />
              <Members color={"red"} />
            </ShowMembersContainer>
          </ShowMembersContent>
        </ShowMembers>
      </Wrapper>
      <ChallengeContainer>
        <Title>챌린지를 선택 해주세요.</Title>
        <ChallengeList>
          <ChallengeCard>
            <ChallengeImg />
            <ChallengeContent>
              <ChallengeContentTitle>저녁 함께하기</ChallengeContentTitle>
              <ChallengeContentDate>
                <MdToday />
                &nbsp; 2일
              </ChallengeContentDate>
            </ChallengeContent>
          </ChallengeCard>
          <ChallengeCard>
            <ChallengeImg />
            <ChallengeContent>
              <ChallengeContentTitle>점심 함께하기</ChallengeContentTitle>
              <ChallengeContentDate>
                <MdToday />
                &nbsp; 2일
              </ChallengeContentDate>
            </ChallengeContent>
          </ChallengeCard>
          <ChallengeCard>
            <ChallengeImg />
            <ChallengeContent>
              <ChallengeContentTitle>아침 함께하기</ChallengeContentTitle>
              <ChallengeContentDate>
                <MdToday />
                &nbsp; 2일
              </ChallengeContentDate>
            </ChallengeContent>
          </ChallengeCard>
        </ChallengeList>
      </ChallengeContainer>
      <Footer>
        <RegistButton>
          <span>완료</span>
        </RegistButton>
      </Footer>
    </Fragment>
  );
}

export default ChallengeRegist;
