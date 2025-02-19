import React, { Fragment } from "react";
import { Layout, Carousel, Card, Progress } from "antd";
import styled from "styled-components";
import calendarImage from "../images/CalendarMirrored.png";
import userImage from "../images/user.PNG";
import {profileColor} from "../styleUtils/colorStyle"
const { Content } = Layout;

const ContentsTitle = styled.div`
  height: 8vh;
  padding-top: 5%;
  margin-bottom: 5%;
  padding-left: 6%;
  font-weight: bold;
  font-size: 1.2rem;
  font-style: normal;
  color: rgba(0, 0, 0, 0.75);
`;
const Contents = styled(Content)`
  margin: 0px 15%;
`;

const ContentsOne = styled.div``;

// Carousel Entire
const OverCarousel = styled(Carousel)`
    &&{
        .slick-dots li.slick-active button{
            background : black;
        }
        .slick-dots li button {
            background : black;
        }
        margin-top : 0;
        height : 410px;
        .slick-list {
            height : 100%;
            border-radius: 10px 10px 0 0;
        }
        .slick-track {
            
            height : 100%;
        }
    }
    .slick-track {
      height: 100%;
    }
  
  margin-top: 5%;
`;

const OverCard = styled(Card)`
  && {
    .ant-card-body {
      padding: 0;
    }
  }
`;

// OverCardPicture Entire
const OverCardPicture = styled.div`
    height: 410px;
    background-color : whitegray;
`;

const OverCardPictureTop = styled.div`
  height: 250px;
  border-radius: 10px 10px 0 0;
  background: #ededed;
`;

const OverCardPictureTopLayerOne = styled.div`
  position: absolute;
  z-index: 2;
  width: 100%;
  text-align: center;
  padding: 4% 10%;
  font-size: 0.7rem;
  && {
    .ant-progress-bg {
      height: 5px !important;
    }
  }
`;

const OverCardPictureTopLayerTwo = styled.div`
  position: relative;
  z-index: 1;
  height: 100%;
`;

const OverCardPictureBottom = styled.div`
    height : 28%;
    padding : 0px 5%;
    border : 1px solid #EDEDED;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 10px 10px;
`;

const OverCardPictureBottomTitle = styled.div`
    float: left;
    font-size : 1rem;
    font-weight: 500;
    line-height : 140%;
    width : 80%;
    color: #000000;
    margin-top : 3%;
    white-space : pre-wrap
`;

const OverCardPictureBottomDetail = styled.div`
    height : 68%;
    margin-top : 3%
`;

const OverCardPictureBottomContent = styled.div`
  clear: both;
  font-size: 0.7rem;
`;
const OverCardPictureBottomContentImage = styled.img`
  float: left;
  margin-right: 2%;
`;

const OverCardPictureBottomUserImage = styled.img`
  padding-left: 3%;
  float: left;
`;
const OverCardPictureBottomImage = styled.img`
  width: 5vh;
 ${profileColor}
  box-sizing: border-box;
  border-radius: 50%;
`;

// Challenge Component by 승준

const ChallengeContainer = styled.div`
  width: 100vw;
  height: 52vh;
  padding: 0% 6% 0 6%;
`;
const ChallengeList = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
  margin-top: 27px;
  margin-bottom : 35px;
`;
const ChallengeCard = styled.div`
  display: flex;
  width: 97%;
  height: 120px;
  background: #ffffff;
  box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.15);
  border-radius: 14px;
  & + & {
    margin-top: 1rem;
  }
`;

const ChallengeImg = styled.img`
  height: 100%;
  flex: 0.25;
  border-radius: 14px 0 0 14px;
  box-sizing: border-box;
  background: gray;
`;
const ChallengeContent = styled.div`
  padding: 1em;
  height: 100%;
  flex: 0.75;
  padding-top : ${props => props.size < 350 ? "15%" : "10%"}
`;

const ChallengeFixed = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5%;
`;
const ChallengeContentTitle = styled.div`
  width: 100%;
  height: 10%;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: -0.02em;
  color: #434444;
  display: flex;
  align-items: center;
  white-space : pre-wrap;
`;

const ChallengeContentDate = styled.div`
  opacity: 99%;
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  letter-spacing: -0.02em;
  color: #434444;
  padding-top: ${props => props.size < 350 ? "25%" : "20%"}
`;

const ChallengeContentProgress = styled.div`
  margin-top: 5%;
  width: 95%;
  text-align: center;
  font-size: 0.7rem;
  && {
    .ant-progress-text {
      color: dimgray;
    }
    .ant-progress-bg {
      height: 5px !important;
    }
    .ant-progress-small.ant-progress-line,
    .ant-progress-small.ant-progress-line .ant-progress-text .anticon {
      padding-right: 20%;
    }
  }
`;

const ChallengeContentProgressText = styled.div`
  position: relative;
  bottom: 3vh;
  float: right;
  color: dimgray;
`;

// 함께하고 있는 챌린지 Styled

const MyChallenge = ({ detailRouter, bottomDetailRouter, challenger_challenges, participation_challenges }) => {
       console.log("challenger_challenges", challenger_challenges)
       console.log("participation_challenges", participation_challenges)
       console.log(window.innerWidth);
    return ( 
        <Fragment>
            <ContentsTitle>
                도전중인 챌린지
            </ContentsTitle>

            <Contents>
                <ContentsOne>

                        {challenger_challenges.length === 0 ? (
                            <div>데이터 없음.</div>
                         ) : (
                            <>
                            <OverCarousel dotPosition={"bottom"}>
                            {challenger_challenges.map((elem, index) => 
                                <OverCard bordered={false} key={index} onClick={() => detailRouter(elem.challengeBarInfo.registeredId)}>
                                    <OverCardPicture>
                                        <OverCardPictureTop>

                                            <OverCardPictureTopLayerOne>
                                                <span style={{color : "white" ,textShadow: "0px 0px 5px rgba(67, 68, 68, 0.6)", fontWeight : "bold", fontSize: 13}}>{elem.challengeBarInfo.percentage}%</span>
                                                <Progress percent={elem.challengeBarInfo.percentage} status="active" showInfo={false} strokeColor="#EB6363"/>
                                            </OverCardPictureTopLayerOne>

                                            <OverCardPictureTopLayerTwo>
                                                <img src ={elem.challengeImage} alt ="default" height = "100%" width = "100%"/>
                                            </OverCardPictureTopLayerTwo>

                                        </OverCardPictureTop>

                                        <OverCardPictureBottom>

                                                <OverCardPictureBottomTitle>{elem.challengeBarInfo.challengeTitle}</OverCardPictureBottomTitle>
                                                <OverCardPictureBottomDetail>
                                                    <OverCardPictureBottomImage color={elem.challengeBarInfo.userInfo[0].color} src ={elem.challengeBarInfo.userInfo[0].profile} alt ="default" height = "36px" width = "36px" style={{float :"right"}}/>
                                                </OverCardPictureBottomDetail>

                                            <OverCardPictureBottomContent>
                                                <OverCardPictureBottomContentImage src={calendarImage} alt="" width = "6%"/>
                                                <span style={{float : "left", color : "#434444"}}>{elem.challengeBarInfo.viewDate}</span>
                                                <OverCardPictureBottomUserImage src={userImage} alt="" width = "10%"/>
                                                <span style={{color :"#434444"}}>{elem.challengeBarInfo.userInfo.length}명</span>
                                            </OverCardPictureBottomContent>

                                        </OverCardPictureBottom>
                                    </OverCardPicture>
                                </OverCard>
                                
                                )}
                            </OverCarousel>
                            </>
                            
                         )}
                </ContentsOne>
            </Contents>



            <ChallengeContainer>
                <ContentsTitle style={{paddingLeft : 0}}>
                        함께하는 챌린지
                </ContentsTitle>
                {participation_challenges.length === 0 ? (
                            <div style={{margin : "0 10%"}}>데이터 없음.</div>
                         ) : (
                    <ChallengeList>
                        {participation_challenges.map((elem, index) => 
                            <ChallengeCard key={index} onClick={() => bottomDetailRouter(elem.challengeBarInfo.registeredId)}>

                            <ChallengeImg src={elem.challengeImage} alt="" width ="80px" />
                            <ChallengeContent size={window.innerWidth}>

                            <ChallengeFixed>
                            <ChallengeContentTitle>{elem.challengeBarInfo.challengeTitle}</ChallengeContentTitle>
                            <OverCardPictureBottomDetail style={{marginTop : 0}}>
                                <OverCardPictureBottomImage color={elem.challengeBarInfo.userInfo[0].color} src ={elem.challengeBarInfo.userInfo[0].profile} alt ="default" height = "36px" width = "36px"/>                            
                                
                                
                            </OverCardPictureBottomDetail>
                            </ChallengeFixed>

                            <ChallengeContentDate size={window.innerWidth}>
                                <OverCardPictureBottomContentImage src={calendarImage} alt="" width = "7%"/>
                                {elem.challengeBarInfo.viewDate}
                                <OverCardPictureBottomUserImage src={userImage} alt="" width = "10%"/>
                                <span>{elem.challengeBarInfo.userInfo.length}명</span>
                            </ChallengeContentDate>

                            <ChallengeContentProgress>
                                <Progress percent={elem.challengeBarInfo.percentage} showInfo={false} status="active" size="small" strokeColor="#EB6363"/> 
                                <ChallengeContentProgressText>        
                                <span style={{color:"red"}}>{elem.challengeBarInfo.certificationNum}</span> / {elem.challengeBarInfo.totalNum}
                                </ChallengeContentProgressText>
                            </ChallengeContentProgress>

                            </ChallengeContent>
                        </ChallengeCard>
                    )}
                </ChallengeList>
                )}

            </ChallengeContainer>


        </Fragment> 
    );
}
 
export default MyChallenge;
