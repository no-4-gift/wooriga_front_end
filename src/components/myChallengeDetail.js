import React, { Fragment } from "react";
import PromiseCardModal from "./PromiseCardModal"
import { Card } from "antd";
import styled from "styled-components";
import defaultImage from "../images/default.PNG";
import { MdArrowBack } from "react-icons/md";
import questionMark from "../images/questionMark.png";
import circlePlus from '../images/circlePlus.PNG';

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

const NumberHorizontalLayout = styled.div`
    padding : 0 5%;
    height : 14vh;
    width:100%;
    float:left;
    overflow-x:scroll;
    white-space:nowrap;
    -ms-overflow-style: none; // IE에서 스크롤바 감춤
    &::-webkit-scrollbar { 
      display: none !important; // 윈도우 크롬 등
    }
`;

const NumberHorizontalContentBorder = styled.div`
    display:inline-block;
    width: 17vw;
    margin-right : 2%;
    border-radius : 50%;
    height: 60px;
    white-space:normal;
    text-align : center;
    background: #EB6363;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
`;

const NumberHorizontalContentBorderFalse = styled.div`
    display:inline-block;
    width: 17vw;
    margin-right : 2%;
    border-radius : 50%;
    height: 60px;
    white-space:normal;
    text-align : center;
    background: white;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
`;

const NumberHorizontalContent = styled.div`
    padding-top : 10%;
    width : 56.13px;
    height : 56.13px;
    position: relative;
    border-radius : 50%;
    border : 1px solid white;
    top: 3%;
    left: 4.4%;
    color: white;
    font-weight : bold;
`;

const NumberHorizontalContentFalse = styled.div`
    padding-top : 10%;
    width : 56.13px;
    height : 56.13px;
    position: relative;
    border-radius : 50%;
    border : 1px solid gray;
    top: 3%;
    left: 4.4%;
    color: gray;
    font-weight : bold;
`;


const NumberHorizontalContentDate = styled.div`
    font-size : 0.7rem;
    margin-top: 8%;
`;

// NumberHorizontal Components

const CertifiedRequirement = styled.div`
    clear : both;
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

const CertifiedRequirementContentFalse = styled.div`
  height: 100%;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding-top : 25%;
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

const CertifiedRequirementContentTextFalse = styled.div`
    font-size : 1rem;
    font-weight : bold;
    padding-top: 15%;
`;

// 밥 사줄게 밑 부분 작업


const ChallengeMemberLayout = styled.div`
    height : 50vh;
    margin : 0 10%;
    margin-top : 28%;
    
`;

const ChallengeMemberTitle = styled.div`
    font-size : 1rem;
    font-weight : bold;
`;

const ChallengeLeader = styled.div`
    height: 46px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-top : 5%;
`;

const ChallengeLeaderImage = styled.img`
    border: 2px solid #FDBE1C;
    box-sizing: border-box;
    border-radius: 50px;
    width : 5vh;
    height : 5vh;
    margin-top : 2%;
    margin-left : 3%;
    float:left;
`;

const ChallengeLeaderName = styled.div`
    font-weight: bold;
    position: relative;
    top: 18%;
    left: 3%;
    float: left;
`;

const ChallengeLeaderTag = styled.div`
    width: auto;
    padding : 0 4%;
    float: left;
    margin-left: 5%;
    margin-top: 3.5%;
    background: #BC61F4;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size : 0.8rem;
`;

const Challenger= styled.div`
    text-align: right;
    position: relative;
    right: 5%;
    top : 18%;
    color: #EB6363;
    font-size: 0.8rem;
    font-weight : bold;
`;

const ChallengeMember = styled.div`
    height: 46px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-top : 5%;
`;


const MyChallengeDetail = ({ 
  backRouter,
  pictureFlagRouter,
  pictureFlag,
  fileOnChange,
  $imagePreview,
  imagePreviewUrl,
  visible,
  text,
  selectedMembers,
  onOpen,
  onClose,
  onChange,
  successInfo,
 }) => {
  if (imagePreviewUrl) {
    $imagePreview = (
      <CertifiedRequirementContentFalse style={{paddingTop : 0}}>
        <img id={"circlePlus"} src={imagePreviewUrl} alt="imagePreviewUrl" width ="100%" height ="100%" />
      </CertifiedRequirementContentFalse>
    );
  } else {
    $imagePreview = (
      <>
      <CertifiedRequirementContentFalse>
      <label htmlFor="file-input">
        <img src={circlePlus} alt={"circlePlus"} height ="30%"/>
      </label>
      
      <input style={{display: "none"}} id="file-input" type="file" name="file" onChange={e => fileOnChange(e)}/>
      <CertifiedRequirementContentTextFalse>오늘의 챌린지를</CertifiedRequirementContentTextFalse>
      <CertifiedRequirementContentTextFalse
        style={{padding : 0}}
      >인증해주세요</CertifiedRequirementContentTextFalse>
      </CertifiedRequirementContentFalse>
    </>
    );
  }

  return (
    <Fragment>

      <PromiseCardModal
              members={selectedMembers}
              onChange={onChange}
              text={text}
              visible={visible}
              onCancle={onClose}
      />

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
      {/* pictureFlagRouter은 회색 빛만 가능하도록 적용 필요. */}
      {successInfo.map((data, index) => {
        if(data === true) {
          return <NumberHorizontalContentBorder key={index}>
          <NumberHorizontalContent onClick={()=>pictureFlagRouter(index)}>
            {index}
            <NumberHorizontalContentDate>12.20</NumberHorizontalContentDate>

          </NumberHorizontalContent>
        </NumberHorizontalContentBorder>
        }
        else {
          return <NumberHorizontalContentBorderFalse key={index}>
          <NumberHorizontalContentFalse onClick={()=>pictureFlagRouter(index)}>
            {index}
            <NumberHorizontalContentDate>12.21</NumberHorizontalContentDate>

          </NumberHorizontalContentFalse>
        </NumberHorizontalContentBorderFalse>
        }
        
      })}
      </NumberHorizontalLayout>

      {pictureFlag? (
        <CertifiedRequirement>
          <CertifiedRequirementContent>hi</CertifiedRequirementContent>
          <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
          <CertifiedRequirementContentText onClick={onOpen}>동생아! 꼭 맛있는 밥 사줄게!</CertifiedRequirementContentText>
        </CertifiedRequirement>

      ) : (
        <CertifiedRequirement>
          {$imagePreview}
          <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
          <CertifiedRequirementContentText onClick={onOpen}>동생아! 꼭 맛있는 밥 사줄게!</CertifiedRequirementContentText>
        </CertifiedRequirement>
      ) }

                
       

        <ChallengeMemberLayout>

          <ChallengeMemberTitle>
            챌린지 구성원
          </ChallengeMemberTitle>

          <ChallengeLeader>
            <ChallengeLeaderImage src={defaultImage} alt="default"/> 
            <ChallengeLeaderTag>멋쟁이아빠</ChallengeLeaderTag>
            <ChallengeLeaderName>정진리</ChallengeLeaderName>
            <Challenger>도전자</Challenger>
          </ChallengeLeader>

          <div style={{borderBottom : "1px solid lightgray", marginTop : "5%"}}></div>

          <ChallengeMember>
            
          </ChallengeMember>

          <ChallengeMember>
            
          </ChallengeMember>

          <ChallengeMember>
            
          </ChallengeMember>

          <ChallengeMember>
            
          </ChallengeMember>

          <ChallengeMember>
            
          </ChallengeMember>
        </ChallengeMemberLayout>
      
      
    </Fragment>
  );
};
export default MyChallengeDetail;

