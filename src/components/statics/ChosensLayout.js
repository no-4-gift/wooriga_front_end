import React from "react";
import calendarImage from "../../images/CalendarMirrored.png";
import contactImage from "../../images/Contact.png";
import maskGroupImage from "../../images/MaskGroup.png";
import MyChallengeContainer from "../../containers/myChallengeContainer";
import CalendarContainer from "../../containers/CalenderContainer";
import MyPageContainer from "../../containers/MyPageContainer";
import styled, { css } from "styled-components";
import Headers from "../statics/HeaderLayout";

// Headers Components
const ChosensLayout = styled.div`
  height: 7.5vh;
  line-height: 10px;
  background: white;
  text-align: center;
  padding: 0 15px !important;
  margin-top: 9vh;
  margin-right: 0;
  && {
  }
`;

const ChosenDivOne = styled.div`
  width: 33%;
  float: left;
  height: 100%;
  padding-top: 2%;
  ${props =>
    props.checked === 1 &&
    css`
      border-bottom: 3px solid;
      border-bottom-color: #eb6363;
    `}
`;

const ChosenDivTwo = styled.div`
  width: 33%;
  float: left;
  height: 100%;
  ${props =>
    props.checked === 2 &&
    css`
      border-bottom: 3px solid;
      border-bottom-color: #eb6363;
    `}
`;

const ChosenDivThree = styled.div`
  width: 33%;
  float: left;
  height: 100%;
  padding-top: 2%;
  ${props =>
    props.checked === 3 &&
    css`
      border-bottom: 3px solid;
      border-bottom-color: #eb6363;
    `}
`;

const ChosenImage = styled.img``;
const Chosens = ({ calendar, maskGroup, contact, checked }) => {
  let $Layout = null;

  if (checked === 1) {
    $Layout = <CalendarContainer />;
  } else if (checked === 2) {
    $Layout = <MyChallengeContainer />;
  } else if (checked === 3) {
    $Layout = <MyPageContainer />;
  }

  return (
    <>
      <Headers />

      <ChosensLayout>
        <ChosenDivOne checked={checked} onClick={calendar}>
          <ChosenImage src={calendarImage} alt="" />
        </ChosenDivOne>

        <ChosenDivTwo checked={checked} onClick={maskGroup}>
          <ChosenImage style={{paddingTop : "3%"}} src={maskGroupImage} alt="" />
        </ChosenDivTwo>

        <ChosenDivThree checked={checked} onClick={contact}>
          <ChosenImage src={contactImage} alt="" />
        </ChosenDivThree>
      </ChosensLayout>

      {$Layout}
    </>
  );
};

export default Chosens;
