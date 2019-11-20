import React, { Fragment } from "react";
import PromiseCardModal from "./PromiseCardModal"
import { Card } from "antd";
import styled from "styled-components";
import defaultImage from "../images/default.PNG";
import { MdArrowBack } from "react-icons/md";
import questionMark from "../images/questionMark.png";
import circlePlus from '../images/circlePlus.PNG';
import userImage from '../images/user.PNG';
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
    padding : 0px 4%;
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
    margin-top: 5%;
    margin-left: 2%;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.75);
`;

const OverCardPictureBottomTitleSub = styled.div`
    position: absolute;
    top: 50%;
    font-size : 1rem;
    margin-top: 5.5%;
    margin-left: 1.5%;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.75);
`;
const OverCardPictureBottomDetail = styled.div`
    height: 9vh;
    margin-top: 4%;
    width: 18%;
    text-align: right;
    border-left: 1px solid lightgray;
`;

const OverCardPictureBottomImage = styled.img`
    border: 2px solid #FDBE1C;
    box-sizing: border-box;
    border-radius : 50%;
    width : 5vh;
    height :5vh;
`;

const OverCardPictureBottomUserImage = styled.img`
    
    width: 3vh;
    height: 3vh;
`;

const OverCardPictureBottomUser = styled.span`

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
    width: 62px;
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
    width: 62px;
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
    top: 2px;
    left: 3px;
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
    top: 2px;
    left: 3px;
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
    top: 20%;
    left: 3%;
    float: left;
`;

const ChallengeLeaderTag = styled.div`
    width: auto;
    padding : 0 4%;
    float: left;
    margin-left: 5%;
    margin-top: 3.5%;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size : 0.8rem;
    background: #FDBE1C;
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

const ChallengeMemberImage = styled.img`
    border: 2px solid ${props => props.color};
    box-sizing: border-box;
    border-radius: 50px;
    width : 5vh;
    height : 5vh;
    margin-top : 2%;
    margin-left : 3%;
    float:left;
`;

const ChallengeMemberName = styled.div`
    font-weight: bold;
    position: relative;
    top: 20%;
    left: 3%;
    float: left;
`;

const ChallengeMemberTag = styled.div`
    width: auto;
    padding : 0 4%;
    float: left;
    margin-left: 5%;
    margin-top: 3.5%;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size : 0.8rem;

    background: ${props => props.color};
`;

const Resident = styled.div`
    text-align: right;
    position: relative;
    right: 5%;
    top : 18%;
    color: lightgray;
    font-size: 0.8rem;
    font-weight : bold;
`;

const ChallengeInfo = styled.div`
    margin : 0 10%;
    margin-top : 5%;
`;

const ChallengeInfoTitle = styled.div`
    font-size: 1rem;
    font-weight: bold;
`;

const ChallengeInfoGoodSentence = styled.div`
    background-color: #EB6363;
    color: white;
    font-size: 0.8rem;
    border-radius: 5px;
    padding: 3%;
    margin: 5% 0;
`;

const ChallengeInfoContent = styled.div`
    line-height : 25px;
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
  onSubmit,
  successInfo,
  members
 }) => {
   // imagePreview
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
              onSubmit={onSubmit}
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
                    <OverCardPictureBottomTitle>{`정다은, 정진리`} 외 {`3`}명과</OverCardPictureBottomTitle>
                    <OverCardPictureBottomTitleSub>{`가족회의`}</OverCardPictureBottomTitleSub>
                    <OverCardPictureBottomDetail>
                        <div style={{marginRight : "7%"}}>
                          <OverCardPictureBottomImage src ={defaultImage} alt ="default" height = "20%" width = "20%"/>
                        </div>
                        
                        <div style={{marginTop : "5%"}}>
                          <OverCardPictureBottomUserImage src={userImage} alt="" width ="10%" />
                          <OverCardPictureBottomUser>{`6명`}</OverCardPictureBottomUser>
                        </div>
                        
                    </OverCardPictureBottomDetail>
                </OverCardPictureBottomFixed>
                
            </OverCardPictureBottom>
        </OverCardPicture>
      </OverCard>

      <NumberHorizontalLayout>
      {/* pictureFlagRouter은 회색 빛만 가능하도록 적용 필요. */}
      {successInfo.map((data, index) => {
        if(data === true) {
          return <NumberHorizontalContentBorder key={index}>
          <NumberHorizontalContent onClick={()=>pictureFlagRouter(data)}>
            {index}
            <NumberHorizontalContentDate>{`12.20`}</NumberHorizontalContentDate>

          </NumberHorizontalContent>
        </NumberHorizontalContentBorder>
        }
        else {
          return <NumberHorizontalContentBorderFalse key={index}>
          <NumberHorizontalContentFalse onClick={()=>pictureFlagRouter(data)}>
            {index}
            <NumberHorizontalContentDate>{`12.21`}</NumberHorizontalContentDate>

          </NumberHorizontalContentFalse>
        </NumberHorizontalContentBorderFalse>
        }
        
      })}
      </NumberHorizontalLayout>

      {pictureFlag? (
        <CertifiedRequirement>
          <CertifiedRequirementContent>hi</CertifiedRequirementContent>
          <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
          <CertifiedRequirementContentText onClick={onOpen}>{text}</CertifiedRequirementContentText>
        </CertifiedRequirement>

      ) : (
        <CertifiedRequirement>
          {$imagePreview}
          <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
          <CertifiedRequirementContentText onClick={onOpen}>{text}</CertifiedRequirementContentText>
        </CertifiedRequirement>
      ) }

                
       

        <ChallengeMemberLayout>

          <ChallengeMemberTitle>
            챌린지 구성원
          </ChallengeMemberTitle>

          <ChallengeLeader>
            <ChallengeLeaderImage src={defaultImage} alt="default"/> 
            <ChallengeLeaderTag>{`멋쟁이아빠`}</ChallengeLeaderTag>
            <ChallengeLeaderName>{`정진리`}</ChallengeLeaderName>
            <Challenger>도전자</Challenger>
          </ChallengeLeader>

          <div style={{borderBottom : "1px solid lightgray", marginTop : "5%"}}></div>

          {members.map((data,index) => {
            return <ChallengeMember key={index}>

              <ChallengeMemberImage src={defaultImage} alt="default" color={data.color}/> 
              <ChallengeMemberTag color={data.color}>{data.relation}</ChallengeMemberTag>
              <ChallengeMemberName>{data.name}</ChallengeMemberName>
              <Resident>참가자</Resident>

            </ChallengeMember>
          })}

        </ChallengeMemberLayout>
      
      
        <ChallengeInfo>
          <ChallengeInfoTitle>{`가족회의`}</ChallengeInfoTitle>

          <ChallengeInfoGoodSentence style={{whiteSpace : "pre-wrap"}}>
            {`함께 내일을 만들어 나가자. 과거에 연연하지 말고 \n- 스티브 잡스`}
          </ChallengeInfoGoodSentence>
          <ChallengeInfoContent style={{whiteSpace : "pre-wrap"}}>
          {`🤔가족회의를 하면 어떤 점이  좋을까요? \n\n - 바쁜 일상 속에서 하지 못했던 의사소통과 교류를 할 수 있습니다.\n - 가족 간의 갈등을 미리 예방할 수 있습니다.\n - 우리 가족만의 공동문화를 창출할 수 있습니다.\n\n 후우… 일일이 쓰기에 너무 많은 가족회의의 장점!\n처음에는 일상적인 이야기부터 쉽게 시작해보는건 어떨까요?`}
          </ChallengeInfoContent>

        </ChallengeInfo>
        

    </Fragment>
  );
};
export default MyChallengeDetail;

