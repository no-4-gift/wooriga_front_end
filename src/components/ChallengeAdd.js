import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { profileColor } from "../styleUtils/colorStyle";
import { MdArrowBack, MdToday } from "react-icons/md";
import questionMark from "../images/questionMark.png";
import PromiseCardModal from "./PromiseCardModal";
// BackHeader Style

const BackTapContainer = styled.div`
  width: 100vw;
  height: 8vh;
  padding-left: 7%;
  padding-right: 7%;
  display: flex;
  align-items: center;

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #434444;
  position: fixed;
  left: 0;
  top: 0;
  background: white;
  z-index: 1;
`;

const BackButton = styled.div`
  width: 10%;
  height: 20px;

  align-items: center;
  font-family: Noto Sans KR;
  font-size: 24px;
  line-height: 24px;
  letter-spacing: 0.05em;
  color: #000000;
`;
const TitleBlock = styled.div`
  width: 55%;
  height: 24px;

  position: relative;
  top: 0;
  left: 3%;

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 29px;
    align-items: center;
    letter-spacing: -0.02em;

    color: #434444;
  }
`;

const QuestionMarkBlock = styled.div`
  position: relative;
  top: 0;
  left: 26%;
  width: 20px;
  height: 20px;
  transform: translate(50%, 0);
  img {
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
`;

// Contents Body Style

const ContentsBlock = styled.div`
  width: 100vw;
  position: absolute;
  left: 0;
  top: 8vh;
  margin-bottom: 12vh;
`;

const SectionTitle = styled.div`
  width: 62%;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    color: #434444;
  }
`;

//챌린지 신청 날짜 섹션 Style

const DateSection = styled.div`
  width: 100vw;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 10px;
`;
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

//Member Section Style

const MemberSection = styled.div`
  width: 100vw;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 22px;
`;

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

const Member = styled.div`
  width: 50px;
  height: 50px;
  ${profileColor}
  margin-right: 14px;

  &:last-child {
    margin: 0;
  }
  border: 2px solid #f2994a;
  box-sizing: border-box;
  border-radius: 30px;
`;

//챌린지 종류 Section Style

const ChallengeSection = styled.div`
  width: 100vw;
  padding: 0 7% 2% 7%;
  margin-top: 10px;
`;
const ChallengeList = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const ChallengeCard = styled.div`
  display: flex;
  width: 100%;
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

// Footer Style

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  z-index: 1;
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

function ChallengeAdd() {
  const dates = [
    "2019-10-15",
    "2019-10-15",
    "2019-10-15",
    "2019-10-15",
    "2019-10-15",
    "2019-10-15",
    "2019-10-15"
  ];
  const rowCount = Math.ceil(dates.length / 2);
  return (
    <Fragment>
      <PromiseCardModal />

      <BackTapContainer>
        <BackButton>
          <MdArrowBack />
        </BackButton>

        <TitleBlock>
          <span>챌린지 등록</span>
        </TitleBlock>
        <QuestionMarkBlock>
          <img src={questionMark} alt="QnA" />
        </QuestionMarkBlock>
      </BackTapContainer>

      <ContentsBlock modalOn>
        <DateSection>
          <SectionTitle>
            <span>선택한 날짜를 확인해 주세요.</span>
          </SectionTitle>
          <DateList count={rowCount}>
            {dates.map((elem, index) => (
              <DateItem key={index}>
                <span>{elem}</span>
              </DateItem>
            ))}
          </DateList>
        </DateSection>
        <MemberSection>
          <SectionTitle>
            <span>함께할 가족을 선택해주세요.</span>
          </SectionTitle>

          <ShowMembersContent>
            <ShowMembersContainer>
              <Member color={"red"} />
              <Member color={"red"} />
              <Member color={"red"} />
              <Member color={"red"} />
              <Member color={"red"} />
              <Member color={"red"} />
            </ShowMembersContainer>
          </ShowMembersContent>
        </MemberSection>
        <ChallengeSection>
          <SectionTitle>
            <span>챌린지를 선택해주세요.</span>
          </SectionTitle>
          <ChallengeList>
            <ChallengeCard>
              <ChallengeImg />
              <ChallengeBody>
                <ChallengeTitle>
                  <span>가족과 식사</span>
                </ChallengeTitle>
                <ChallengeDate>
                  <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                    <MdToday />
                  </span>
                  <span>&nbsp;10일</span>
                </ChallengeDate>
                <ChallengeContent>
                  <p>Flexible Box도 훌륭하지만 비교적 단순한 1차원</p>
                </ChallengeContent>
              </ChallengeBody>
            </ChallengeCard>
            <ChallengeCard>
              <ChallengeImg />
              <ChallengeBody>
                <ChallengeTitle>
                  <span>가족과 식사</span>
                </ChallengeTitle>
                <ChallengeDate>
                  <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                    <MdToday />
                  </span>
                  <span>&nbsp;10일</span>
                </ChallengeDate>
                <ChallengeContent>
                  <p>Flexible Box도 훌륭하지만 비교적 단순한 1차원</p>
                </ChallengeContent>
              </ChallengeBody>
            </ChallengeCard>
            <ChallengeCard>
              <ChallengeImg />
              <ChallengeBody>
                <ChallengeTitle>
                  <span>가족과 식사</span>
                </ChallengeTitle>
                <ChallengeDate>
                  <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                    <MdToday />
                  </span>
                  <span>&nbsp;10일</span>
                </ChallengeDate>
                <ChallengeContent>
                  <p>Flexible Box도 훌륭하지만 비교적 단순한 1차원</p>
                </ChallengeContent>
              </ChallengeBody>
            </ChallengeCard>
            <ChallengeCard>
              <ChallengeImg />
              <ChallengeBody>
                <ChallengeTitle>
                  <span>가족과 식사</span>
                </ChallengeTitle>
                <ChallengeDate>
                  <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                    <MdToday />
                  </span>
                  <span>&nbsp;10일</span>
                </ChallengeDate>
                <ChallengeContent>
                  <p>Flexible Box도 훌륭하지만 비교적 단순한 1차원</p>
                </ChallengeContent>
              </ChallengeBody>
            </ChallengeCard>
            <ChallengeCard>
              <ChallengeImg />
              <ChallengeBody>
                <ChallengeTitle>
                  <span>가족과 식사</span>
                </ChallengeTitle>
                <ChallengeDate>
                  <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                    <MdToday />
                  </span>
                  <span>&nbsp;10일</span>
                </ChallengeDate>
                <ChallengeContent>
                  <p>Flexible Box도 훌륭하지만 비교적 단순한 1차원</p>
                </ChallengeContent>
              </ChallengeBody>
            </ChallengeCard>
          </ChallengeList>
        </ChallengeSection>
      </ContentsBlock>

      <Footer>
        <RegistButton
          onClick={() => {
            console.log("완료버튼 클릭");
          }}
        >
          <span>완료</span>
        </RegistButton>
      </Footer>
    </Fragment>
  );
}

export default ChallengeAdd;
