import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
import PromiseCardModal from "./PromiseCardModal";
import BackTap from "./statics/BackTap";
import PropTypes from "prop-types";
import ChallengeShowDates from "./ChallengeShowDates";
import ChallengeMembers from "./ChallengeMembers";
import ChallengeList from "./ChallengeList";

function ChallengeAdd({
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
        <TopToListButton active={activeTopButton} onClick={onTop}>
          <MdKeyboardArrowUp />
        </TopToListButton>
        <DateSection>
          <SectionTitle>
            <span>선택한 날짜를 확인해 주세요.</span>
          </SectionTitle>
          <ChallengeShowDates dates={dates} />
        </DateSection>
        <MemberSection>
          <SectionTitle>
            <span>함께할 가족을 선택해주세요.</span>
          </SectionTitle>
          <ChallengeMembers
            members={members}
            onSelectMembers={onSelectMembers}
          />
        </MemberSection>
        <ChallengeSection>
          <SectionTitle>
            <span>챌린지를 선택해주세요.</span>
          </SectionTitle>
          <ChallengeList
            challengeId={challengeId}
            dates={dates}
            challengeList={challengeList}
            onSelectChallenge={onSelectChallenge}
          />
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

ChallengeAdd.propTypes = {
  dates: PropTypes.array.isRequired,
  members: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    })
  ),
  selectedMembers: PropTypes.array.isRequired,
  challengeList: PropTypes.array.isRequired,
  challengeId: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
  disable: PropTypes.bool.isRequired,
  activeTopButton: PropTypes.bool.isRequired,
  onOpen: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelectChallenge: PropTypes.func.isRequired,
  onSelectMembers: PropTypes.func.isRequired,
  onTop: PropTypes.func.isRequired
};

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

//Member Section Style

const MemberSection = styled.div`
  width: 100vw;
  padding-left: 7%;
  padding-right: 7%;
  margin-top: 22px;
`;

//챌린지 종류 Section Style

const ChallengeSection = styled.div`
  width: 100vw;
  padding: 0 7% 2% 7%;
  margin-top: 10px;
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
  opacity: 0;
  transition: 0.25s linear;
  ${props =>
    props.active &&
    css`
      opacity: 1;
    `}
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
