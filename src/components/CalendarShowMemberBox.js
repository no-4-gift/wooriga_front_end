import React, { useState } from "react";
import styled, { css } from "styled-components";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const SlideWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 312px;
  height: 100px;
  margin: 0 auto;
  top: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
`;
const MemberSlide = styled.div`
  position: absolute;
  ${props =>
    props.pos === false
      ? css`
          transform: translate(0, 0);
        `
      : css`
          transform: translate(-50%, 0);
        `}

  display: flex;
  transition: all 0.25s linear;
`;
const RightArrowButton = styled.span`
  position: absolute;
  top: 38px;
  right: 7px;
  font-size: 20px;
  font-weight: bold;
`;
const LeftArrowButton = styled.span`
  position: absolute;
  top: 38px;
  left: 7px;
  font-size: 20px;
  font-weight: bold;
`;

const MemberProfileBox = styled.div`
  /*position: relative;*/
  position: relative;
  width: 312px;
  height: 100px;
  min-width: 312px;
  flex: 1;
  /* margin: 0 auto;
  top: 20px;*/
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  background: #ffffff;
  /*box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;*/
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  letter-spacing: -0.02em;

  color: #434444;
`;

const MemberProfileContainer = styled.div`
  display: flex;
  width: 90vw;
  justify-content: center;
`;
const MemberProfile = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background: gray;
  ${profileColor}
  box-sizing: border-box;
  border-radius: 20px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: none;

  & + & {
    margin-left: 7px;
  }
  ${props =>
    props.me &&
    css`
      &::before {
        content: "";
        position: absolute;
        right: 0;
        width: 10px;
        height: 10px;
        border-radius: 50px;
        ${colorSelector}
      }
    `}
`;

const GroupInviteTitle = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
const InviteCode = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 43px;
  letter-spacing: -0.02em;
  color: #434444;
`;

//자신의 id 받아와야 함
function CalendarShowMemberBox({ members, userId }) {
  const [toggle, setToggle] = useState(false);

  const isAdmin = true; // members.filter(member => member.uid === userId).admin;

  const handleClickArrow = () => {
    setToggle(!toggle);
  };

  return (
    <SlideWrapper>
      <MemberSlide pos={toggle}>
        <MemberProfileBox>
          {isAdmin && (
            <RightArrowButton onClick={handleClickArrow}>
              <MdKeyboardArrowRight />
            </RightArrowButton>
          )}
          <MemberProfileContainer>
            {members.map(member => (
              <MemberProfile
                me={member.uid === userId ? true : false}
                key={member.uid}
                color={member.color}
                img={member.profile}
              />
            ))}
          </MemberProfileContainer>
          <div>가족과 함께할 시간을 만들어봐요.</div>
        </MemberProfileBox>
        {isAdmin && (
          <MemberProfileBox>
            <LeftArrowButton onClick={handleClickArrow}>
              <MdKeyboardArrowLeft />
            </LeftArrowButton>
            <div>
              <GroupInviteTitle>그룹 초대 코드</GroupInviteTitle>
            </div>
            <div>
              <InviteCode>AF1G5HTL</InviteCode>
            </div>
          </MemberProfileBox>
        )}
      </MemberSlide>
    </SlideWrapper>
  );
}

export default CalendarShowMemberBox;
