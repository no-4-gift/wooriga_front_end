import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdArrowBack } from "react-icons/md";
import { Layout, Typography, Card, List, Tag } from "antd";
import { profileColor } from "../styleUtils/colorStyle";
import questionMark from "../images/questionMark.png";
import crown from "../images/crown.png";
import yellowcrown from "../images/yellowcrown.png";
import x from "../images/x.png";
import defaultImage from "../images/default.PNG";
import plusImg from "../images/Vector.png";
const { Text } = Typography;

//FamilyList

const MyFamilyList = styled.div`
  margin: 4rem 1rem 1.5rem 1rem;
  width: 90%;
`;

const FamilyMemberCard = styled.div`
  height: 65px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  margin-top: 5%;
`;

const FamilyMemberName = styled.div`
  font-weight: bold;
  position: relative;
  top: 31%;
  left: 3%;
  float: left;
  font-size: larger;
`;

const FamilyMemberImage = styled.img`
  box-sizing: border-box;
  margin-top: 2%;
  margin-left: 3%;

  width: 50px;
  height: 50px;
  background: #828282;
  border-radius: 2rem;
  border: 4px solid ${profileColor};
  float: left;
`;

const FamilyMemberTag = styled.div`
width: auto;
height:35%
padding: 0 4%;
float: left;
margin-left: 5%;
margin-top: 6.5%;
border-radius: 2rem;
color: white;
text-align: center;
font-size: 0.9rem;
background: ${props => props.color};
`;

//Img
const LeaderCrownImg = styled.img`
  position: relative;
  right: 5%;
  top: 31%;
  float: right;
  height: 33%;
`;

const CrownImg = styled.img`
  position: relative;
  right: 15%;
  top: 37%;
  float: right;
  height: 25%;
`;
const XImg = styled.img`
  position: relative;
  top: 37%;
  float: right;
  height: 25%;
`;

const PlusImg = styled.img`
  margin-left: 48%;
`;

//backPage
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
  background: white;
  position: fixed;
  left: 0;
  top: 0;
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

function MyPageDetail({
  backPage,
  members,
  rowsToDisplay,
  onOpenCodeCopy,
  onLeaderChange,
  onDeleteMember
}) {
  console.log("mypageDetail-----------");
  console.log(members);
  console.log("mypageDetail-----------");

  return (
    <Fragment>
      <BackTapContainer>
        <BackButton onClick={backPage}>
          <MdArrowBack />
        </BackButton>

        <TitleBlock>
          <span>우리 가족</span>
        </TitleBlock>
        <QuestionMarkBlock>
          <img src={questionMark} alt="QnA" />
        </QuestionMarkBlock>
      </BackTapContainer>
      <MyFamilyList>
        <Text>나와 함께하는 가족들입니다. </Text>

        {/* 우리 가족 */}
        <FamilyMemberCard>
          <FamilyMemberImage src={defaultImage} alt="default" color="yellow" />
          <FamilyMemberTag color="yellow">{`멋쟁이아빠`}</FamilyMemberTag>
          <FamilyMemberName>{`정진리`}</FamilyMemberName>
          <LeaderCrownImg src={yellowcrown} alt="yellowcrown" />
        </FamilyMemberCard>

        <div
          style={{ borderBottom: "1px solid lightgray", marginTop: "5%" }}
        ></div>

        {members.map((data, index) => {
          return (
            <FamilyMemberCard key={index}>
              <FamilyMemberImage
                src={defaultImage}
                alt="default"
                color={data.color}
              />
              <FamilyMemberTag color={data.color}>
                {data.relation}
              </FamilyMemberTag>
              <FamilyMemberName>{data.name}</FamilyMemberName>
              <CrownImg
                src={crown}
                alt="crown"
                onClick={() => onLeaderChange(data.id)}
                // changeleaderinfo={data.id}
              />
              <XImg
                src={x}
                alt="delete"
                onClick={() => onDeleteMember(data.id)}
              />
            </FamilyMemberCard>
          );
        })}
      </MyFamilyList>
      <PlusImg src={plusImg} alt="plusButton" onClick={onOpenCodeCopy} />
    </Fragment>
  );
}

export default MyPageDetail;

MyPageDetail.propTypes = {
  members: PropTypes.array,
  onLeaderChange: PropTypes.func,
  onDeleteMember: PropTypes.func,
  onOpenCodeCopy: PropTypes.func
};
