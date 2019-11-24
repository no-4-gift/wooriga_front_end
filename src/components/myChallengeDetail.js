import React, { Fragment } from "react";
<<<<<<< HEAD
import { Card, Carousel } from "antd";
import styled, {css} from "styled-components";
=======

import { Card } from "antd";
import styled from "styled-components";
>>>>>>> 927aaf5e1211efbab2e3237f084abe082affdbf1
import defaultImage from "../images/default.PNG";
import { MdArrowBack } from "react-icons/md";
import questionMark from "../images/questionMark.png";
import calendarImage from '../images/CalendarMirrored.png';


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

// 상단 태그 


const OverCard = styled(Card)`
    &&{
        .ant-card-body {
            padding : 18% 20px;
            height : 27vh;
        }
    }
`;

// OverCardPicture Entire
const OverCardPicture = styled.div`
    height: 45vh;
    background-color : whitegray;
`;

const OverCardPictureBottom = styled.div`
    height : 28%;
    padding : 0px 5%;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
    border-radius: 10px 10px 10px 10px;
`;

const OverCardPictureBottomFixed = styled.div`
    display : flex;
    justify-content : space-between
`;

const OverCardPictureBottomTitle = styled.div`
    float: left;
    font-size : 1rem;
    margin-top: 4%;
    margin-left: 5%;
    font-weight: bold;
`;
const OverCardPictureBottomDetail = styled.div`
    height : 25vh;
    margin-top : 8%
`;

const OverCardPictureBottomContent = styled.div`
    clear : both;
    font-size : 0.7rem;
    position : relative;
    top : -170%;
    left: 5%;
`;

const OverCardPictureBottomImage = styled.img`
    border-radius : 50%;
    width : 5vh;
`;

// Challenge Component by 승준 

const OverCarousel = styled(Carousel)`
    &&{
        .slick-dots li.slick-active button{
            background : black;
        }
        .slick-dots li button {
            background : black;
        }
        margin-top : 0;
        height : 45vh;
        .slick-list {
            height : 100%;
        }
        .slick-track {
            
            height : 100%;
        }
    }
    margin-top : 5%
`;

const NumberHorizontalLayout = styled.div`
    padding : 0 5%;
    height : 14vh;
`;

const NumberHorizontalContentBorder = styled.div`

    width: 17vw;
    margin-right : 1%;
    border-radius : 50%;
    height: 60px;
    float : left;
    text-align : center;

    
    ${props =>
      props.certified &&
      css`
        background : #EB6363;
      `
    }
    ${props =>
      !props.certified &&
      css`
        background : white;
      `
    }
`;

const NumberHorizontalContent = styled.div`
    padding-top : 10%;
    width : 56.13px;
    height : 56.13px;
    position: relative;
    border-radius : 50%;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    top: 3%;
    left: 4.4%;
    
    font-weight : bold;
    border : 1px solid white;
    color: white;
    ${props =>
      props.certified &&
      css`
        
      `
    }
    ${props =>
      !props.certified &&
      css`
        border : 1px solid gray;
        color: gray;
      `
    }

`;

const NumberHorizontalContentDate = styled.div`
    font-size : 0.7rem;
    margin-top: 8%;
`;

// NumberHorizontal Components

const CertifiedRequirement = styled.div`
    padding: 0 15%;
    text-align : center;
    width: 100%;
    height : 40vh;


`;
const CertifiedRequirementContent = styled.div`
  background-color: rgb(238, 238, 238);
  height: 100%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
`;

const CertifiedRequirementContentTriangle = styled.div`
    margin-top: 5%;
    margin-left: 50%;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 10px solid #E0E0E0;
`;
const CertifiedRequirementContentText = styled.div`
    background: #E0E0E0;
    border-radius: 10px;
    height: 18%;
    padding-top: 5%;
    font-size: 0.8rem;
`;

let NumberHorizontalArray = [
  true,
  true,
  true,
  true,
  false
]
const MyChallengeDetail = ({ backRouter }) => {
  return (
    <Fragment>
      <BackTapContainer>
        <BackButton onClick={backRouter}>
          <MdArrowBack />
        </BackButton>


        <TitleBlock>
          <span>챌린지 세부 정보</span>
        </TitleBlock>
        <QuestionMarkBlock>
          <img src={questionMark} alt="QnA" />
        </QuestionMarkBlock>
      </BackTapContainer>

      <OverCard bordered={false}>
        <OverCardPicture>
            <OverCardPictureBottom>
                <OverCardPictureBottomFixed>
                    <OverCardPictureBottomTitle>저녁식사하기</OverCardPictureBottomTitle>
                    <OverCardPictureBottomDetail>
                        <OverCardPictureBottomImage src ={defaultImage} alt ="default" height = "20%" width = "20%"/>
                    </OverCardPictureBottomDetail>
                </OverCardPictureBottomFixed>
                <OverCardPictureBottomContent>
                    12.20 금 / 12.21 토 / ...
                </OverCardPictureBottomContent>
            </OverCardPictureBottom>
        </OverCardPicture>
      </OverCard>

      <NumberHorizontalLayout>
        <OverCarousel>
        <div>
        {NumberHorizontalArray.map((elem, index) => {
          if(elem === true){
            return <NumberHorizontalContentBorder certified={elem} key={index}>
              <NumberHorizontalContent certified={elem}>
                {index+1}
                <NumberHorizontalContentDate>12.20</NumberHorizontalContentDate>

              </NumberHorizontalContent>
            </NumberHorizontalContentBorder>
          }
          else {
            return <NumberHorizontalContentBorder certified={elem} key={index}>
            <NumberHorizontalContent certified={elem}>
              {index+1}
              <NumberHorizontalContentDate>12.20</NumberHorizontalContentDate>

            </NumberHorizontalContent>
          </NumberHorizontalContentBorder>
          }
        }
        )}
        </div>

        <div>

        {NumberHorizontalArray.map((elem, index) => {
          if(elem === true){
            return <NumberHorizontalContentBorder certified={elem} key={index}>
              <NumberHorizontalContent certified={elem}>
                {index+6}
                <NumberHorizontalContentDate>12.21</NumberHorizontalContentDate>

              </NumberHorizontalContent>
            </NumberHorizontalContentBorder>
          }
          else {
            return <NumberHorizontalContentBorder certified={elem} key={index}>
            <NumberHorizontalContent certified={elem}>
              {index+6}
              <NumberHorizontalContentDate>12.20</NumberHorizontalContentDate>

            </NumberHorizontalContent>
          </NumberHorizontalContentBorder>
          }
        }
        )}
        </div>
        </OverCarousel>
      </NumberHorizontalLayout>

      <CertifiedRequirement>
          <CertifiedRequirementContent>hi</CertifiedRequirementContent>
          <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
          <CertifiedRequirementContentText>동생아! 꼭 맛있는 밥 사줄게!</CertifiedRequirementContentText>
      </CertifiedRequirement>
      
    </Fragment>
  );
};
export default MyChallengeDetail;

