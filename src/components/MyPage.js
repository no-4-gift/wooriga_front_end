import React, { Fragment } from "react";
import styled from "styled-components";
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
import ChosensContainer from "../containers/ChosensContainer";

//////////////////////
import defaultImage from "../images/default.PNG";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
const { Content } = Layout;
const { Text } = Typography;
// const MemberProfileContainer = styled.div`
//   display: flex;
//   width: 90vw;
//   justify-content: center;
// `;
// const MemberProfile = styled.div`
//   width: 40px;
//   height: 40px;

//   background: gray;
//   ${profileColor}
//   box-sizing: border-box;
//   border-radius: 20px;
//   & + & {
//     margin-left: 7px;
//   }
// `;
/////////////////////////////

const OverCard = styled(Card)`
  && {
    .ant-card-body {
      padding: 0 2%;
      height: 27vh;
    }
  }
`;

const ChallengeCardTitle = styled.div`
  float: left;
  height: 30%;
  font-size: 1rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
  display: contents;
`;

const ChallengeCardDate = styled.div`
  font-size: 1rem;
  height: 30%;
  float: left;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.75);
  display: contents;
`;

const ChallengeCard = styled.div`
  height: 70%;
  padding: 20% 4%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 10px 10px 10px 10px;

  display: flex;
  // width: 97%;
  // height: 120px;
  // background: #ffffff;
  // -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
  //   0 6px 6px rgba(0, 0, 0, 0.23);
  // -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
  //   0 6px 6px rgba(0, 0, 0, 0.23);
  // -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  // -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  // box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  & + & {
    margin-top: 1rem;
  }
`;

const CarouselArray = ["1", "2", "3"];

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
  border: 1.5px #f15f5f solid;
  border-radius: 5rem;
  text-align: center;
  float: left;
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

const MemeberIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: #828282;
  border-radius: 2rem;
  ${profileColor}
  float: left;
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
// const FamilyInfoCard = styled.div(Card)`

// `;

const RecordContainer = styled.div`
  margin-left: 10rem;
  margin-top: 1rem;
  font-size: large;
  padding-top: 1.5rem;
`;

//////////////////////////////////////////

// const MemeberIconBorder = styled.div`
//   ${profileColor}

//   box-sizing: border-box;
//   border-radius: 30px;
// `;

function MyPage({
  members,
  onShow,
  myid,
  visible,
  onShowMoreBtn,
  rowsToDisplay,
  MovedetailPage
}) {
  console.log("mypage-----------");
  console.log(visible);
  console.log(myid);
  console.log(rowsToDisplay);
  console.log("mypage-----------");

  return (
    <WhiteBackgroundLayout>
      <Headers content="내정보" />
      <ChosensContainer />
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
          <MyIcon />
          {/* <div
            style={{
              width: "70%",
              height: "100%",
              float: "right",
              marginTop: "0.8rem"
            }}
          > */}
          <MyInfo>
            <Tag color="#f15f5f">맏언니지롱</Tag>
            <Text strong> 유인선</Text>
            <br />
            <Text>현재 진행중인 챌린지</Text>
            <Text>3</Text>
          </MyInfo>
        </Card>

        {/* 우리 가족 */}
        <div>
          <TitleText>우리 가족</TitleText>
          <SettingText onClick={MovedetailPage}>편집</SettingText>

          <List
            itemLayout="vertical"
            size="small"
            //dataSource={members}
            dataSource={members.slice(0, rowsToDisplay)}
            renderItem={member => (
              <List.Item key={member.id}>
                <Card size="small" style={{ height: "10vh" }}>
                  <MemeberIcon color={member.color} />

                  <div style={{ margin: "3% 20%" }}>
                    <Tag
                      color={member.color}
                      style={{ float: "left", borderradius: "5rem" }}
                    >
                      {member.relation}
                    </Tag>
                    <List.Item.Meta title={member.name} />
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
                <RecordCircleInfo>
                  <Text style={{ fontSize: "medium", color: "white" }}>
                    달성률
                  </Text>
                  <Text strong style={{ fontSize: "20px", color: "white" }}>
                    80.8%
                  </Text>
                </RecordCircleInfo>
              </RecordCircle>
            </RecordInnerCircle>
            <RecordContainer>
              <Text>총 10개 참가</Text>
              <br />
              <Text>성공</Text>
              <Text style={{ color: "#9FC93C", margin: "0 1rem" }}>5</Text>
              <Text>실패</Text>
              <Text style={{ color: "#F15F5F", margin: "0 1rem" }}>5</Text>
            </RecordContainer>
          </div>
          <br />

          <OverCard bordered={false}>
            {CarouselArray.map(index => (
              <ChallengeCard key={index}>
                <ChallengeCardTitle>{`저녁식사하기`}</ChallengeCardTitle>
                <br />
                <ChallengeCardDate>{`19.11`}</ChallengeCardDate>
              </ChallengeCard>
            ))}
          </OverCard>
        </div>
      </MypageLayout>
    </WhiteBackgroundLayout>
  );
}

export default MyPage;

MyPage.propTypes = {
  members: PropTypes.array,
  // onSaveModal: PropTypes.func,
  onShow: PropTypes.func,
  onShowMoreBtn: PropTypes.func
};
