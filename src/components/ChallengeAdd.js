import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { profileColor } from "../styleUtils/colorStyle";
import { MdToday, MdDone, MdKeyboardArrowUp } from "react-icons/md";
import PromiseCardModal from "./PromiseCardModal";
import BackTap from "./statics/BackTap";

function ChallengeAdd({
  thisRef,
  dates,
  members,
  selectedMembers,
  challengeList,
  challengeId,
  text,
  visible,
  disable,
  activeTopButton,
  onOpen,
  onClose,
  onChange,
  onSelectChallenge,
  onSelectMembers,
  onTop
}) {
  const rowCount = Math.ceil(dates.length / 2);

  return (
    <Fragment>
      <PromiseCardModal
        members={selectedMembers}
        onChange={onChange}
        text={text}
        visible={visible}
        onCancle={onClose}
      />

      <BackTap title={"챌린지 등록"} targetRouter={"/"} questionRouter={"/"} />

      <ContentsBlock>
        {activeTopButton === true && (
          <TopToListButton onClick={onTop}>
            <MdKeyboardArrowUp />
          </TopToListButton>
        )}

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
              {members.map(elem => (
                <MemberWrapper
                  onClick={() => onSelectMembers(elem.id)}
                  key={elem.id}
                >
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
        </MemberSection>
        <ChallengeSection>
          <SectionTitle ref={thisRef}>
            <span>챌린지를 선택해주세요.</span>
          </SectionTitle>
          <ChallengeList>
            {challengeList.map(elem => (
              <ChallengeCard
                select={elem.id === challengeId ? true : false}
                onClick={() => onSelectChallenge(elem.id)}
              >
                <ChallengeImg src={""} />
                <ChallengeBody>
                  <ChallengeTitle>
                    <span>{elem.title}</span>
                  </ChallengeTitle>
                  <ChallengeDate>
                    <span style={{ fontSize: "14px", lineHeight: "14px" }}>
                      <MdToday />
                    </span>
                    <span>&nbsp;{dates.length}일</span>
                  </ChallengeDate>
                  <ChallengeContent>
                    <p>{elem.content}</p>
                  </ChallengeContent>
                </ChallengeBody>
              </ChallengeCard>
            ))}
          </ChallengeList>
        </ChallengeSection>
      </ContentsBlock>

      <Footer>
        <RegistButton disabled={disable} active={!disable} onClick={onOpen}>
          <span>완료</span>
        </RegistButton>
      </Footer>
    </Fragment>
  );
}

export default ChallengeAdd;

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
  ${props =>
    props.select === true &&
    css`
      background: rgba(235, 99, 99, 0.2);
      border: 2px solid #eb6363;
    `}
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
  background-color: gray;
  background-image: url(${props => props.src});
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

//Top Button Style
const TopToListButton = styled.div`
  position: fixed;
  right: 6vw;
  bottom: 13vh;
  width: 52px;
  height: 52px;
  border-radius: 30px;
  background: #eb6363;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: bold;
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
  transition: 0.25s linear;
  ${props =>
    props.active === true &&
    css`
      background: #eb6363;
    `}

  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;

    color: #ffffff;
  }
`;
