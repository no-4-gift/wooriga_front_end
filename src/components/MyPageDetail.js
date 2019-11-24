import React, { Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { MdArrowBack } from "react-icons/md";
import { Layout, Typography, Card, List, Tag } from "antd";
import { profileColor } from "../styleUtils/colorStyle";
import questionMark from "../images/questionMark.png";
import crown from "../images/crown.png";
const { Text } = Typography;

//icon
const MemeberIcon = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  background: #828282;
  border-radius: 2rem;
  ${profileColor}
  float: left;
`;

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

const MyFamilyList = styled.div`
  margin: 4rem 1rem;
  width: 90%;
`;

//////////////////////////////////////////
function MyPageDetail({ backPage, members, rowsToDisplay }) {
  console.log("mypageDetail-----------");
  console.log(rowsToDisplay);
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
        {/* 우리 가족 */}
        <div>
          <List
            itemLayout="vertical"
            size="small"
            dataSource={members}
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
                  <img src={crown} alt="crown" />
                </Card>
              </List.Item>
            )}
          />
        </div>
      </MyFamilyList>
    </Fragment>
  );
}

export default MyPageDetail;

MyPageDetail.propTypes = {
  members: PropTypes.array
};
