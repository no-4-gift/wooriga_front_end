import React, { Fragment } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import {
  Layout,
  Typography,
  Card,
  Avatar,
  Icon,
  Button,
  Modal,
  Skeleton,
  List,
  Tag,
  Upload,
  message
} from "antd";
import Headers from "./statics/HeaderLayout";
import calendarImage from "../images/CalendarMirrored.png";
import userImage from "../images/user.PNG";
//////////////////////
import defaultImage from "../images/default.PNG";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
const { Content } = Layout;
const { Text } = Typography;

// Challenge
const ChallengeCard = styled.div`
  display: flex;
  width: 97%;
  height: 120px;
  background: #ffffff;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
  color: balck;
  background-image: url(${props => props.img});
  position: relative;
  border-radius: 14px;
  & + & {
    margin-top: 1rem;
  }
`;

const OverCard = styled(Card)`
  && {
    .ant-card-body {
      padding: 0 2%;
      height: 27vh;
    }
  }
`;

const ChallengeCardLayer = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  & + & {
    margin-top: 1rem;
  }
`;
const ChallengeCardTitle = styled.div`
  float: left;
  height: auto;
  font-size: large;
  font-weight: bold;
  color: white;
  margin: 1rem 0 0 1rem;
`;

const ChallengeCardDate = styled.div`
  font-size: 1rem;
  height: auto;
  float: left;
  font-weight: bold;
  color: white;
  margin: 0 0 0 1rem;
`;
const WhiteBackgroundLayout = styled(Content)`
  background: white;
`;

const MypageLayout = styled(Content)`
  margin: 0 16px;
`;

//myIcon
const MyIcon = styled.div`
  position: relative;
  width: 65px;
  height: 65px;
  border-radius: 5rem ${profileColor};
  text-align: center;
  float: left;
  box-sizing: border-box;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: none;

  & + & {
    margin-left: 7px;
  }
`;
const MemberTag = styled.div`
width: auto;
height:auto
padding: 0 4%;
float: left;
margin-right: 5%;
border-radius: 2rem;
color: white;
text-align: center;
font-size: 0.9rem;
background: ${props => props.color};
`;
const MemberSmallTag = styled.div`
  float: left;
  borderradius: 5rem;
  border-radius: 2rem;
  color: white;
  width: auto;
  height: auto;
  padding: 0 4%;
  margin-right: 1rem;
  background: ${props => props.color};
`;

//icon
const RecordCircle = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 5rem;
  background: #f15f5f;
  text-align: center;
  margin-left: 0.3rem;
  margin-top: 0.25rem;
`;

const RecordCircleInfo = styled.div`
  padding: 15%;
  margin-left: 0.2rem;
`;
const RecordInnerCircle = styled.div`
  position: relative;
  width: 112px;
  height: 112px;
  border: 1.5px #f15f5f solid;
  border-radius: 5rem;
  text-align: center;
  float: left;
`;

const MemberProfile = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  background: #828282;
  ${profileColor}
  float: left;
  box-sizing: border-box;
  border-radius: 20px;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: none;

  & + & {
    margin-left: 7px;
  }
`;

const SettingText = styled(Text)`
  float: right;
`;
const TitleText = styled(Text)`
  font-weight: 600;
  font-size: x-large;
`;
const MyInfo = styled.div`
  width: 70%;
  height: 100%;
  float: right;
  margin-top: 0.8rem;
  font-size: initial;
`;

const RecordContainer = styled.div`
  margin-left: 10rem;
  margin-top: 1rem;
  font-size: large;
  padding-top: 1.5rem;
`;

function MyPage({
  members,
  onShow,
  userId,
  visible,
  onShowMoreBtn,
  rowsToDisplay,
  MovedetailPage,

  // 챌린지 리스트
  challenger_challenges,
  participation_challenges,
  detailRouter,
  bottomDetailRouter
}) {
  let myinfo = members.filter(elem => elem.uid === userId)[0];

  let AllChallenge = challenger_challenges.concat(participation_challenges);
  let aa = AllChallenge.filter(
    elem => elem.challengeBarInfo.percentage === 100
  );

  // let percentage =
  //   AllChallenge.length === 0
  //     ? "0%입니다"
  //     : ((AllChallenge.filter(elem => elem.challengeBarInfo.percentage === 100)
  //         .length /
  //         AllChallenge.length) *
  //       100)+"%";

  let percentage =
    AllChallenge.length === 0 ? (
      <Text style={{ color: "white", fontSize: "xlarge" }}>챌린지없음</Text>
    ) : (
      <>
        <Text style={{ fontSize: "medium", color: "white" }}>달성률</Text>
        <Text strong style={{ fontSize: "20px", color: "white" }}>
          {(AllChallenge.filter(
            elem => elem.challengeBarInfo.percentage === 100
          ).length /
            AllChallenge.length) *
            100}{" "}
          %
        </Text>
      </>
    );

  console.log("mypage-----------!!");
  console.log(members);
  console.log(userId);
  console.log(myinfo);
  console.log(AllChallenge);
  console.log(aa);
  console.log(aa.length);
  console.log("mypage-----------!!");

  return (
    <WhiteBackgroundLayout>
      <Headers content="내정보" />
      <MypageLayout>
        <br />

        <div>
          <TitleText>내 정보</TitleText>
          <SettingText onClick={onShow}>설정</SettingText>
        </div>

        <Card
          style={{
            width: "100%",
            height: "18vh",
            margin: "5% 0 10% 0.1%"
          }}
        >
          {members
            .filter(x => x.uid === userId)
            .map(member => (
              <>
                <MyIcon color={member.color} img={member.profile} />
                <MyInfo>
                  <MemberTag color={member.color}>
                    {member.relationship}
                  </MemberTag>
                  <Text strong>{member.name}</Text>
                  <br />
                  <Text>현재 진행중인 챌린지 </Text>
                  <Text strong> {AllChallenge.length} 개</Text>
                </MyInfo>
              </>
            ))}
        </Card>

        {/* 우리 가족 */}
        <div>
          <TitleText>우리 가족</TitleText>
          <SettingText onClick={MovedetailPage}>편집</SettingText>
          <List
            itemLayout="vertical"
            size="small"
            dataSource={members
              .filter(x => x.uid !== userId)
              .slice(0, rowsToDisplay)}
            renderItem={elem => (
              <List.Item key={elem.uid}>
                <Card size="small" style={{ height: "10vh" }}>
                  <MemberProfile
                    key={elem.uid}
                    color={elem.color}
                    img={elem.profile}
                  />

                  <div style={{ margin: "3% 20%" }}>
                    <MemberSmallTag color={elem.color}>
                      {elem.relationship}
                    </MemberSmallTag>
                    <List.Item.Meta title={elem.name} />
                  </div>
                </Card>
              </List.Item>
            )}
          />
          <Button
            style={{ margin: "0 45%", border: "none" }}
            onClick={onShowMoreBtn}
          >
            ∨
          </Button>
        </div>

        {/* 나의 기록 */}
        <div>
          <TitleText>나의 기록</TitleText>
          <br />
          <div style={{ margin: "3% 0px 13% 0" }}>
            <RecordInnerCircle>
              <RecordCircle>
                <RecordCircleInfo>{percentage}</RecordCircleInfo>
              </RecordCircle>
            </RecordInnerCircle>
            <RecordContainer>
              <Text>총 {AllChallenge.length} 개 참가</Text>
              <br />
              <Text>성공</Text>
              <Text style={{ color: "#9FC93C", margin: "0 1rem" }}>
                {
                  AllChallenge.filter(
                    elem => elem.challengeBarInfo.percentage === 100
                  ).length
                }
              </Text>
              <Text>실패</Text>
              <Text style={{ color: "#F15F5F", margin: "0 1rem" }}>
                {
                  AllChallenge.filter(
                    elem => elem.challengeBarInfo.percentage !== 100
                  ).length
                }
              </Text>
            </RecordContainer>
          </div>
          <br />
          {AllChallenge.length === 0 ? (
            <div style={{ margin: "0 10%" }}>
              진행중인 챌린지가 없습니다 ㅜ.ㅜ
            </div>
          ) : (
            <OverCard bordered={false}>
              {participation_challenges.map((elem, index) => (
                <ChallengeCard
                  key={index}
                  onClick={() =>
                    detailRouter(elem.challengeBarInfo.registeredId)
                  }
                  img={elem.challengeImage}
                >
                  <ChallengeCardLayer>
                    <br />
                    <ChallengeCardTitle>
                      {elem.challengeBarInfo.challengeTitle}
                    </ChallengeCardTitle>
                    <br />
                    <ChallengeCardDate>
                      {elem.challengeBarInfo.viewDate}
                    </ChallengeCardDate>
                  </ChallengeCardLayer>
                </ChallengeCard>
              ))}
              {challenger_challenges.map((elem, index) => (
                <ChallengeCard
                  key={index}
                  onClick={() =>
                    bottomDetailRouter(elem.challengeBarInfo.registeredId)
                  }
                  img={elem.challengeImage}
                >
                  <ChallengeCardLayer>
                    <ChallengeCardTitle>
                      {elem.challengeBarInfo.challengeTitle}
                    </ChallengeCardTitle>
                    <br />
                    <ChallengeCardDate>
                      {elem.challengeBarInfo.viewDate}
                    </ChallengeCardDate>
                  </ChallengeCardLayer>
                </ChallengeCard>
              ))}
            </OverCard>
          )}
        </div>
      </MypageLayout>
    </WhiteBackgroundLayout>
  );
}

export default MyPage;

MyPage.propTypes = {
  members: PropTypes.array.isRequired,
  userId: PropTypes.number.isRequired,
  // onSaveModal: PropTypes.func,
  onShow: PropTypes.func,
  onShowMoreBtn: PropTypes.func
};
