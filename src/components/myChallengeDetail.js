import React, { Fragment } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import defaultImage from "../images/default.PNG";
import logoImage from "../images/logo.png";
import questionMark from "../images/questionMark.png";
import backArrow from "../images/backArrow.png";

const { Header, Content } = Layout;

const MyChallengeDetail = ({ backRouter }) => {
  return (
    <Fragment>
      <Headers style={{ height: "7.5vh", lineHeight: 0, background: "white" }}>
        <Logo>
          <img
            src={logoImage}
            alt="default"
            height="70%"
            style={{ marginRight: "4%" }}
          />
          <QuestionMark>
            <img src={questionMark} alt="default" height="100%" width="100%" />
          </QuestionMark>

          <BackMark onClick={backRouter}>
            <img src={backArrow} alt="default" height="100%" width="100%" />
          </BackMark>
        </Logo>
      </Headers>

      <ContentsTitle>인증 가이드</ContentsTitle>

      <ContentOptional>
        아래의 추억지도를 가족과 함께한 순간, 사진으로 채워 주세요.
      </ContentOptional>

      <Contents>
        <Certification>
          <div
            style={{
              margin: "1% 5%",
              height: "75%",
              backgroundColor: "#ccc",
              borderRadius: "5px"
            }}
          >
            <div
              style={{
                fontWeight: "bolder",
                textAlign: "center",
                fontSize: "1%",
                paddingTop: "5%"
              }}
            >
              '동생'과 함께하는 저녁식사
            </div>

            <div style={{ marginTop: "3%" }}>
              <CertificationImage>
                <img
                  src={defaultImage}
                  alt="default"
                  height="100%"
                  width="100%"
                />
              </CertificationImage>
              <CertificationImage>
                <img
                  src={defaultImage}
                  alt="default"
                  height="100%"
                  width="100%"
                />
              </CertificationImage>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid lightgray",
              borderBottom: "1px solid lightgray",
              height: "23.5%"
            }}
          >
            hi
          </div>
        </Certification>
      </Contents>

      <ContentsTitle>챌린지 카드</ContentsTitle>
    </Fragment>
  );
};
export default MyChallengeDetail;

// Headers Components
const Headers = styled(Header)`
  height: 7.5vh;
  text-align: center;
  line-height: 10px;
  margin: 5%;
  background: white;
  padding: 0 10px !important;
  margin-right: 0;
  margin-left: 0;
`;

const Logo = styled.div``;

const BackMark = styled.span`
  float: left;
  margin-top: 10px;
`;
const QuestionMark = styled.span`
  float: right;
  margin-top: 10px;
`;

// Contents Components

const ContentsTitle = styled.div`
  height: 8vh;
  background-color: whitesmoke;
  padding-top: 5%;
  padding-left: 6%;
  font-weight: bolder;
  font-size: 0.7rem;
`;
const Contents = styled(Content)`
  margin-top: 0%;
`;

const ContentOptional = styled.div`
  padding-left: 5.5%;
  font-weight: 400;
  font-size: 0.6rem;
  color: silver;
  margin: 1% 0;
`;

// 인증 가이드 styled
const Certification = styled.div`
  padding-bottom: 0%;
  height: 38vh;
  background-color: lightgray;
`;

const CertificationImage = styled.div`
  float: left;
  width: 50%;
`;

// 함께하고 있는 챌린지 Styled
