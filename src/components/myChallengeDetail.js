import React, { Fragment } from "react";
import { Card, Spin } from "antd";
import styled from "styled-components";
import defaultImage from "../images/default.PNG";
import { MdArrowBack } from "react-icons/md";
import deleteCertification from "../images/deleteCertification.png";
import circlePlus from "../images/circlePlus.png";
import userImage from '../images/user.PNG';
import moment from 'moment';

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
  height: 28px;

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
    height: 12vh;
`;

const OverCardPictureBottom = styled.div`
    height : 100%;
    padding : 0px 4%;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
    border-radius: 10px 10px 10px 10px;
    width: 100%;
`;

const OverCardPictureBottomFixed = styled.div`
    display : flex;
    justify-content : space-between
`;

const OverCardPictureBottomTitle = styled.div`
    width: 80%;
    float: left;
    font-size : 1rem;
    margin-top: 5%;
    margin-left: 2%;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.75);
`;

const OverCardPictureBottomDetail = styled.div`
    height: 9vh;
    margin-top: 4%;
    width: 20%;
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
    
    width: 2.5vh;
    height: 2.5vh;
`;

const OverCardPictureBottomUser = styled.span`
    margin-top : 3%;
`;

// Challenge Component by 승준 

const NumberHorizontalLayout = styled.div`

    padding : ${props => props.size < 350 ? "0" : "0 5%"};
    height : 11vh;
    width:100%;
    float:left;
    overflow-x:scroll;
    white-space:nowrap;
    margin-bottom : ${props => props.size < 350 ? "2%" : "0"};
    -ms-overflow-style: none; // IE에서 스크롤바 감춤
    &::-webkit-scrollbar { 
      display: none !important; // 윈도우 크롬 등
    }
`;
console.log('size : ',window.innerWidth);
const NumberHorizontalContentBorder = styled.div`
    display:inline-block;
    width: 62px;
    margin-right : ${props => props.size < 350 ? "1%" : props.size < 370 ? "2%" : props.size < 410 ? "3%" : "4.5%"};
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
    margin-right : ${props => props.size < 350 ? "1%" : props.size < 370 ? "2%" : props.size < 410 ? "3%" : "4.5%"};
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
    height : 100%;
`;

const CertifiedRequirementContent = styled.div`

  height: 250px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
`;

const CertifiedRequirementContentLayer = styled.div`
    position: relative;
    color: white;
    top: -60%;
    font-size: 16px;
    font-weight : bold;
`;

const CertifiedRequirementContentFalse = styled.div`
  height: 250px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  padding-top : 25%;
  border: 2px dashed #EB6363;
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
    height : 100%;
    padding : 3%;
    font-size: 0.8rem;
`;

const CertifiedRequirementContentTextFalse = styled.div`
    font-size : 1rem;
    font-weight : bold;
    padding-top: 12%;
    color : #EB6363;
`;

// 밥 사줄게 밑 부분 작업


const ChallengeMemberLayout = styled.div`
    margin : 5% 10%;
    
`;

const ChallengeMemberTitle = styled.div`
    font-size : 1rem;
    font-weight : bold;
`;

const ChallengeLeader = styled.div`
    height: 55px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    margin-top : 5%;
`;

const ChallengeLeaderImage = styled.img`
    border: 2px solid ${props => props.color};
    box-sizing: border-box;
    border-radius: 50px;
    width : 5vh;
    height : 5vh;
    margin-top : ${props => props.size < 350 ? "5%" : "2%"};
    margin-left : 3%;
    float:left;
`;

const ChallengeLeaderName = styled.div`
    font-weight: bold;
    position: relative;
    top: ${props => props.size < 350 ? "27%" : "30%"};
    left: 3%;
    float: left;
`;

const ChallengeLeaderTag = styled.div`
    width: auto;
    padding : 0 4%;
    float: left;
    margin-left: 5%;
    margin-top: ${props => props.size < 350 ? "6.5%" : "5.5%"};
    border-radius: 10px;
    color: white;
    text-align: center;
    font-size : 0.8rem;
    background: ${props => props.color};
`;

const Challenger= styled.div`
    text-align: right;
    position: relative;
    right: 5%;
    top : ${props => props.size < 350 ? "27%" : "30%"};
    color: #EB6363;
    font-size: 0.8rem;
    font-weight : bold;
`;

const ChallengeMember = styled.div`
    height: 55px;
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
    margin-top : ${props => props.size < 350 ? "5%" : "2%"};
    margin-left : 3%;
    float:left;
`;

const ChallengeMemberName = styled.div`
    font-weight: bold;
    position: relative;
    top: ${props => props.size < 350 ? "27%" : "30%"};
    left: 3%;
    float: left;
`;

const ChallengeMemberTag = styled.div`
    width: auto;
    padding : 0 4%;
    float: left;
    margin-left: 5%;
    margin-top: ${props => props.size < 350 ? "6.5%" : "5.5%"};
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
    top : ${props => props.size < 350 ? "27%" : "30%"};
    color: lightgray;
    font-size: 0.8rem;
    font-weight : bold;
`;

const ChallengeInfo = styled.div`
    margin : 5% 10%;
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

// const OverSpin = styled(Spin)`
//     &&{
//       .ant-spin-dot-item {
//         background-color : white;
//       }
//     }
// `;
let TodayTime = moment().format("YYYY-MM-DD");
  
const MyChallengeDetail = ({ 
  backRouter,
  pictureFlagRouter,
  pictureFlag,
  pictureUrl,
  cardDate,
  fileOnChange,
  $imagePreview,
  imagePreviewUrl,
  onOpen,
  certification,
  certificationArray,
  memberData,
  userType,
  fileOnDelete,
  fileOnDeleteAfter,
  deleteLoading,
  postLoading
 }) => {

  // cardDate = moment(cardDate).format("YYYY-MM-DD");

  cardDate = cardDate.replace(/\./g, '-').substring(0, 10);
  
  // console.log('certification : ', certification);
  // console.log('certificationArray : ', certificationArray);

  // console.log("memberData : ", memberData);
  // console.log("cardDate : ", cardDate);
  // console.log("userType : ", userType);

   // imagePreview

  if(deleteLoading) {
    $imagePreview = (
      <CertifiedRequirementContentFalse style={{paddingTop : 0}}>
        <div style={{
          height : 0,
          float : "right",
          position : "relative",
          top : "1vh",
          right : "1.5vw"

        }}>
        
        </div>

        <Spin style={{height : "100%", paddingTop : 110}}/>
        
      </CertifiedRequirementContentFalse>
    );
  }
  else {
    if (imagePreviewUrl) {
      // 프리뷰!!

      if(postLoading) {
        $imagePreview = (
          <CertifiedRequirementContentFalse style={{paddingTop : 0}}>
            <div style={{
              height : 0,
              float : "right",
              position : "relative",
              top : "1vh",
              right : "1.5vw"
    
            }}>
            
            </div>
    
            <Spin style={{height : "100%", paddingTop : 110}}/>
            
          </CertifiedRequirementContentFalse>
        );
      }
      else {
        $imagePreview = (
          <CertifiedRequirementContentFalse style={{paddingTop : 0}}>
            <div style={{
              height : 0,
              float : "right",
              position : "relative",
              top : "1vh",
              right : "1.5vw"
    
            }}>
            <img src={deleteCertification} alt="deleteCertification" width="25px" height="25px" 
                style={{
                  
                  background: "rgba(44, 44, 44, 0.2)",
                  boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.15)",
                  borderRadius: "14px",
                  border: "1px solid #FFFFFF"
                }} 
                onClick={(e) => fileOnDelete(e, memberData[0].challengeBarInfo.registeredId, cardDate)}
                />
            </div>
    
            <img id={"circlePlus"} src={imagePreviewUrl} alt="imagePreviewUrl" width ="100%" height ="100%" style={{borderRadius : 15}} />
            
            <CertifiedRequirementContentLayer style={{clear : "both"}}>{cardDate}</CertifiedRequirementContentLayer>
            <CertifiedRequirementContentLayer>인증 성공</CertifiedRequirementContentLayer>
          </CertifiedRequirementContentFalse>
        );
      }
      
    } else {
      // 기본!
      if(userType === "sub"){
        $imagePreview = (
          <>
          참가자는 인증할 수 없습니다.
          </>
        )
      }
      else {
        $imagePreview = (
          <>
          <CertifiedRequirementContentFalse>
          <label htmlFor="file-input">
            <img src={circlePlus} alt={"circlePlus"} height ="30%"/>
          </label>
          
          <input style={{display: "none"}} id="file-input" type="file" name="file" accept="image/*" capture="camera" onChange={e => fileOnChange(e, memberData[0].challengeBarInfo.registeredId, cardDate)}/>
          <CertifiedRequirementContentTextFalse>오늘의 챌린지를</CertifiedRequirementContentTextFalse>
          <CertifiedRequirementContentTextFalse
            style={{padding : 0}}
          >인증해주세요</CertifiedRequirementContentTextFalse>
          </CertifiedRequirementContentFalse>
        </>
        );
      }
  
    }
  }
  

  return (
    <Fragment>
  
      <BackTapContainer>
        <BackButton onClick={backRouter}>
          <MdArrowBack />
        </BackButton>


        <TitleBlock>
          <span>챌린지 세부 정보</span>
        </TitleBlock>

      </BackTapContainer>
      
      <OverCard bordered={false}>
        <OverCardPicture>
            <OverCardPictureBottom>
                <OverCardPictureBottomFixed>
                    <OverCardPictureBottomTitle style={{whiteSpace : "pre-wrap"}}>{memberData[0].challengeBarInfo.challengeTitle}</OverCardPictureBottomTitle>

                    <OverCardPictureBottomDetail>
                        <div style={{marginRight : "7%"}}>
                          <OverCardPictureBottomImage src ={memberData[0].challengeBarInfo.userInfo[0].profile} alt ="default" height = "20%" width = "20%"/>
                        </div>
                        
                        <div style={{marginTop : "5%", width: "90%"}}>
                          <OverCardPictureBottomUserImage src={userImage} alt="" width ="10%" />
                          <OverCardPictureBottomUser>{memberData[0].challengeBarInfo.userInfo.length}명</OverCardPictureBottomUser>
                        </div>
                        
                    </OverCardPictureBottomDetail>
                </OverCardPictureBottomFixed>
                
            </OverCardPictureBottom>
        </OverCardPicture>
      </OverCard>

      <NumberHorizontalLayout size={window.innerWidth}>
      {/* pictureFlagRouter은 회색 빛만 가능하도록 적용 필요. */}
      {certificationArray.map((data, index) => {
        if(data.certificationTrue === 1) {
          return <NumberHorizontalContentBorder key={index} size={window.innerWidth}>
          <NumberHorizontalContent onClick={()=>pictureFlagRouter(data.certificationTrue, data.certificationImage, data.cardDate)}>
            {index}
            <NumberHorizontalContentDate>{data.certificationDate}</NumberHorizontalContentDate>

          </NumberHorizontalContent>
        </NumberHorizontalContentBorder>
        }
        else {
          return <NumberHorizontalContentBorderFalse key={index} size={window.innerWidth}>
          <NumberHorizontalContentFalse onClick={()=>pictureFlagRouter(data.certificationTrue, data.certificationImage, data.cardDate)}>
            {index}
            <NumberHorizontalContentDate>{data.certificationDate}</NumberHorizontalContentDate>

          </NumberHorizontalContentFalse>
        </NumberHorizontalContentBorderFalse>
        }
        
      })}
      </NumberHorizontalLayout>

      {pictureFlag? (
        <>
        {/* (이미지가 존재하는) 오늘 */}
        {moment(TodayTime).isSame(cardDate) ? (
          <>
          {deleteLoading? (
            <CertifiedRequirement>
              <CertifiedRequirementContent>
                <div style={{
                  height : 0,
                  float : "right",
                  position : "relative",
                  top : "1vh",
                  right : "1.5vw"

                }}>
                
                </div>

                <Spin style={{height : "100%", paddingTop : 110}}/>
                
              </CertifiedRequirementContent>
            </CertifiedRequirement>
          ) : (
            <CertifiedRequirement>
              <CertifiedRequirementContent>
              <div style={{

                float : "right",
                height : 0,
                position: "relative",
                top: "1vh",
                right: "1.5vw"
                }}>
                <img src={deleteCertification} alt="deleteCertification" width="25px" height="25px" 
                style={{

                background: "rgba(44, 44, 44, 0.2)",
                boxShadow: "0px 0px 12px rgba(0, 0, 0, 0.15)",
                borderRadius: "14px",
                border: "1px solid #FFFFFF"
                }} 
                onClick={(e) => fileOnDeleteAfter(e, memberData[0].challengeBarInfo.registeredId, cardDate)}
                />
              </div>

              <img src={pictureUrl} alt="pictureUrl" width="100%" height="100%" style={{opacity : "0.8", borderRadius : 10, position : "relative", zIndex : -1}} /> 
              
              
              
              <CertifiedRequirementContentLayer style={{clear : "both", top : "-60%"}}>{cardDate}</CertifiedRequirementContentLayer>
              <CertifiedRequirementContentLayer style={{top : "-60%"}}>인증 성공</CertifiedRequirementContentLayer>
              </CertifiedRequirementContent>
              <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
              <CertifiedRequirementContentText onClick={onOpen}>{certification.resolution}</CertifiedRequirementContentText>
            </CertifiedRequirement>
          )}
          
          </>
        ) : (
          // 이미지가 존재하지만, 오늘이 아님
          <CertifiedRequirement>
            <CertifiedRequirementContent>
            <img src={pictureUrl} alt="pictureUrl" width="100%" height="100%" style={{opacity : "0.8", borderRadius : 10}} /> 
            <CertifiedRequirementContentLayer>{cardDate}</CertifiedRequirementContentLayer>
            <CertifiedRequirementContentLayer>인증 성공</CertifiedRequirementContentLayer>
            </CertifiedRequirementContent>
            <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
            <CertifiedRequirementContentText onClick={onOpen}>{certification.resolution}</CertifiedRequirementContentText>
          </CertifiedRequirement>
        )}

        
        </>
      ) : (
        <CertifiedRequirement>
          {userType === "sub" ? (
            <>
                    <CertifiedRequirementContent style={{border: "2px dashed #EB6363"}}>
                      <CertifiedRequirementContentLayer 
                      style={{position : "initial", color : "#EB6363", top : 0, fontSize : 16, whiteSpace : "pre-wrap", paddingTop : "32%"}}>
                        참가자는 {`\n`}인증할 수{`\n`} 없습니다.
                      </CertifiedRequirementContentLayer>
                    </CertifiedRequirementContent>
            </>
          ) : (
            <>
              {moment(TodayTime).isAfter(cardDate) 
              ? 
              // 이미지가 존재하지 않고, 이전의 날
                (

                    <CertifiedRequirementContent style={{border: "2px dashed #EB6363"}}>
                      <CertifiedRequirementContentLayer 
                      style={{position : "initial", color : "#EB6363", top : 0, fontSize : 16, whiteSpace : "pre-wrap", paddingTop : "35%"}}>
                        {cardDate}{`\n`}인증 실패
                      </CertifiedRequirementContentLayer>
                    </CertifiedRequirementContent>

                ) : 
                (
                  <>
                  {moment(TodayTime).isBefore(cardDate)
                  ?
                  // 이미지가 존재하지 않고, 이후의 날
                    (
                        <CertifiedRequirementContent style={{border: "2px dashed #EB6363"}}>
                          <CertifiedRequirementContentLayer 
                          style={{position : "initial", color : "#EB6363", top : 0, fontSize : 16, whiteSpace : "pre-wrap", paddingTop : "32%"}}>
                            오늘은 {`\n`}인증하는 날이{`\n`} 아닙니다.
                          </CertifiedRequirementContentLayer>
                        </CertifiedRequirementContent>

                    ) : (
                    // 이미지가 존재하지 않고, 이전의 날 이후에 날이 아닌 오늘!
                    <>
                      {$imagePreview}
                    </>)
                  }
                  
                  </>
                )}
            </>
          )}
          
          
          <CertifiedRequirementContentTriangle></CertifiedRequirementContentTriangle>
          <CertifiedRequirementContentText onClick={onOpen}>{certification.resolution}</CertifiedRequirementContentText>
        </CertifiedRequirement>
      ) }

                
       

        <ChallengeMemberLayout>

          <ChallengeMemberTitle>
            챌린지 구성원
          </ChallengeMemberTitle>

          <ChallengeLeader>
            <ChallengeLeaderImage size={window.innerWidth} src={memberData[0].challengeBarInfo.userInfo[0].profile} alt="default" color={memberData[0].challengeBarInfo.userInfo[0].color}/> 
            <ChallengeLeaderTag size={window.innerWidth} color={memberData[0].challengeBarInfo.userInfo[0].color} >{memberData[0].challengeBarInfo.userInfo[0].relationship}</ChallengeLeaderTag>
            <ChallengeLeaderName  size={window.innerWidth}>{memberData[0].challengeBarInfo.userInfo[0].name}</ChallengeLeaderName>
            <Challenger size={window.innerWidth}>도전자</Challenger>
          </ChallengeLeader>

          <div style={{borderBottom : "1px solid lightgray", marginTop : "5%"}}></div>

          {memberData[0].challengeBarInfo.userInfo.map((data,index) => {

            if(index === 0){
              return '';
            }
            return <ChallengeMember key={index}>

              <ChallengeMemberImage size={window.innerWidth} src={defaultImage} alt="default" color={data.color}/> 
              <ChallengeMemberTag size={window.innerWidth} color={data.color}>{data.relationship}</ChallengeMemberTag>
              <ChallengeMemberName  size={window.innerWidth}>{data.name}</ChallengeMemberName>
              <Resident  size={window.innerWidth}>참가자</Resident>

            </ChallengeMember>
          })}

        </ChallengeMemberLayout>
      
      
        <ChallengeInfo>
          <ChallengeInfoTitle>{certification.title}</ChallengeInfoTitle>

          <ChallengeInfoGoodSentence style={{whiteSpace : "pre-wrap"}}>
            {certification.summary}
          </ChallengeInfoGoodSentence>
          <ChallengeInfoContent style={{whiteSpace : "pre-wrap"}}>
            {certification.content}
          </ChallengeInfoContent>

        </ChallengeInfo>
        

    </Fragment>
  );
};
export default MyChallengeDetail;

