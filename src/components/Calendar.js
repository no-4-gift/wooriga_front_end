import React from "react";
import styled, { css } from "styled-components";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { colorSelector } from "../styleUtils/colorStyle";
import PropTypes from "prop-types";

import HitArea from "react-hammerjs";
import CalendarShowMemberBox from "./CalendarShowMemberBox";
import timeDiff from "../utils/timeDiff";

//
const Wrapper = styled.div``;

//Calendar Style
const CalendarContainer = styled.div`
  width: 100vw;

  padding-left: 10%;
  padding-right: 10%;
  z-index: 1;
`;
const CalendarHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #434444;
`;

const MonthText = styled.span`
  width: 22vw;
  text-align: center;
`;
const AllowButton = styled.div`
  width: 4vw;
  text-align: center;
`;
const CalendarBody = styled.div``;

const CalendarRow = styled.div`
  display: flex;
`;

const grayed = css`
  ${({ grayed }) => {
    return grayed
      ? css`
          color: gray;
        `
      : null;
  }}
`;

const CalendarBox = styled.div`
  cursor: pointer;
  position: relative;
  width: calc(100% / 7);
  color: black;
  ${grayed}
  &:first-child {
    color: red;

    ${grayed}
  }

  &:last-child {
    color: #588dff;
    ${grayed}
  }
  ${props =>
    props.select &&
    css`
      background: rgba(255, 122, 0, 0.3);
      border-radius: 3px;
    `}
`;

const Text = styled.div`
  font-size: 14px;
  width: 20px;
  height: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  ${props =>
    props.isChallenge &&
    css`
      background: #eb6363;
      border-radius: 4px;
      color: white;
    `}
`;
const MemberContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(${props => props.cols}, 8px);
  grid-template-rows: repeat(${props => props.rows}, 8px);
  grid-gap: 4px 4px;
  width: 100%;
  height: 20px;
  overflow: auto;
  justify-items: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  /*display: flex;
  overflow: auto;
  padding-top: 5px;
  padding-left: 1%;
  padding-right: 1%;*/
`;

const Circle = styled.div`
  width: 8px;
  min-width: 8px;
  max-width: 8px;
  flex: 1;
  height: 8px;
  border-radius: 100%;

  ${colorSelector}
`;

//button Styles
const ButtonContainer = styled.div``;

const Button = styled.button`
  position: relative;
  width: 90vw;
  height: 46px;
  left: 50%;
  top: 15px;
  transform: translate(-50%, 50%);
  background: #eb6363;

  box-shadow: 0px 4px 10px rgba(250, 42, 42, 0.25);
  border-radius: 23px;
  border: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  color: white;
  text-align: center;
`;

const ChallengeButton = styled.button`
  position: relative;
  width: 90vw;
  height: 46px;
  left: 50%;
  top: 25px;
  transform: translate(-50%, 50%);
  transition: 0.5s ease-in;
  ${props =>
    props.disable
      ? css`
          background: #777777;
        `
      : css`
          background: #eb6363;
        `}

  box-shadow: 0px 4px 10px rgba(250, 42, 42, 0.25);
  border-radius: 23px;
  border: none;

  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: white;
  }

  text-align: center;
`;

function CalendarGenerator({
  today,
  selected,
  dates,
  challengeAcitveDates,
  onClickDate
}) {
  console.log(today.format("YYYY-MM-DD"));
  const startWeek = today
    .clone()
    .startOf("month")
    .week();

  console.log(`startWeek: ${startWeek}`);

  let calendar = [];
  let curToday = today.clone();

  for (let weight = 0; weight < 6; weight++) {
    let week = startWeek + weight;

    calendar.push(
      <CalendarRow key={week}>
        {Array(7)
          .fill(0)
          //eslint-disable-next-line no-loop-func
          .map((n, i) => {
            let current = curToday
              .clone()
              .week(week)
              .startOf("week")
              .add(n + i, "day");
            let thisDayMembers = dates.filter(
              elem => elem.emptyDate === current.format("YYYY-MM-DD")
            );

            const rows = Math.ceil(thisDayMembers.length / 3);
            const cols =
              thisDayMembers.length < 3
                ? thisDayMembers.length < 2
                  ? 1
                  : 2
                : 3;
            let selCheck = selected.findIndex(
              elem => elem === current.format("YYYY-MM-DD")
            );
            let selKey = selCheck !== -1 ? true : false;

            const isChallenge =
              challengeAcitveDates.findIndex(
                elem => elem === current.format("YYYY-MM-DD")
              ) !== -1
                ? timeDiff(current.format("YYYY-MM-DD"))
                : false;

            let isGrayed =
              current.format("MM") === curToday.format("MM") ? false : true;
            return (
              <CalendarBox key={i} grayed={isGrayed} select={selKey}>
                <Text
                  isChallenge={isChallenge}
                  onClick={() => onClickDate(current.format("YYYY-MM-DD"))}
                >
                  {current.format("D")}
                </Text>

                <MemberContainer rows={rows} cols={cols}>
                  {thisDayMembers.map(elem => (
                    <Circle
                      key={elem.userInfo.uid}
                      color={elem.userInfo.color}
                    ></Circle>
                  ))}
                </MemberContainer>
              </CalendarBox>
            );
          })}
      </CalendarRow>
    );
  }
  return calendar;
}

function Calendar({
  dates,
  members,
  userId,
  today,
  toggle,
  disable,
  challengeDates,
  challengeAcitveDates,
  onClickDate,
  onToggle,
  GoToChallenge,
  onPreMonth,
  onNextMonth,
  onTodayMonth,
  onSwipe
}) {
  return (
    <Wrapper>
      <CalendarContainer>
        <CalendarHead>
          <AllowButton onClick={onPreMonth}>
            <MdChevronLeft />
          </AllowButton>
          <MonthText onClick={onTodayMonth}>{today.format("MM월")}</MonthText>
          <AllowButton onClick={onNextMonth}>
            <MdChevronRight />
          </AllowButton>
        </CalendarHead>
        <HitArea onSwipe={onSwipe}>
          <CalendarBody>
            <CalendarRow>
              <CalendarBox>
                <Text>일</Text>
              </CalendarBox>
              <CalendarBox>
                <Text>월</Text>
              </CalendarBox>
              <CalendarBox>
                <Text>화</Text>
              </CalendarBox>
              <CalendarBox>
                <Text>수</Text>
              </CalendarBox>
              <CalendarBox>
                <Text>목</Text>
              </CalendarBox>
              <CalendarBox>
                <Text>금</Text>
              </CalendarBox>
              <CalendarBox>
                <Text>토</Text>
              </CalendarBox>
            </CalendarRow>
            <CalendarGenerator
              today={today}
              selected={challengeDates}
              dates={dates}
              toggle={toggle}
              onClickDate={onClickDate}
              challengeAcitveDates={challengeAcitveDates}
            />
          </CalendarBody>
        </HitArea>
      </CalendarContainer>

      <CalendarShowMemberBox members={members} userId={userId} />
      <ButtonContainer>
        {!toggle && <Button onClick={onToggle}>챌린지 날짜 선택</Button>}
        {toggle && (
          <ChallengeButton
            disabled={disable}
            disable={disable}
            onClick={GoToChallenge}
          >
            <span>챌린지 GO</span>
          </ChallengeButton>
        )}
      </ButtonContainer>
    </Wrapper>
  );
}

export default Calendar;

Calendar.propTypes = {
  dates: PropTypes.array.isRequired,
  members: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  today: PropTypes.object.isRequired,
  toggle: PropTypes.bool.isRequired,
  challengeAcitveDates: PropTypes.array.isRequired,
  challengeDates: PropTypes.array.isRequired,
  onClickDate: PropTypes.func.isRequired,
  onToggle: PropTypes.func.isRequired,
  GoToChallenge: PropTypes.func.isRequired,
  onPreMonth: PropTypes.func.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  onTodayMonth: PropTypes.func.isRequired
};
