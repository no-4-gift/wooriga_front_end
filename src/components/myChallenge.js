import React, { Fragment } from 'react';
import { Layout, Carousel, Card, Progress  } from 'antd'; 
import styled from 'styled-components';
import defaultImage from '../images/default.PNG';
import calendarImage from '../images/CalendarMirrored.png';
import userImage from '../images/user.PNG';
const { Content } = Layout;


const ContentsTitle = styled.div`
    height : 8vh;
    padding-top : 5%;
    margin-bottom : 5%;
    padding-left : 6%;
    font-weight: bold;
    font-size: 1.2rem;
    font-style : normal;
    color: rgba(0, 0, 0, 0.75);
`;
const Contents = styled(Content)`
    margin : 0px 13%;
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

const OverCard = styled(Card)`
    &&{
        .ant-card-body {
            padding : 0;
        }
    }
`;

// OverCardPicture Entire
const OverCardPicture = styled.div`
    height: 45vh;
    background-color : whitegray;
`;

const OverCardPictureTop = styled.div`
    height: 60%;
    border-radius: 10px 10px 0 0;
    background: #EDEDED;
`;

const OverCardPictureTopLayerOne = styled.div`
    position : absolute;
    z-index : 2;
    width : 100%;
    text-align : center;
    padding : 4% 10%;
    font-size : 0.7rem;
    &&{
        .ant-progress-bg{
            height : 3px !important;
        }
    }
    
`;

const OverCardPictureTopLayerTwo = styled.div`
    position : relative;
    z-index : 1;
    height: 100%;

`;

const OverCardPictureBottom = styled.div`
    height : 28%;
    padding : 0px 5%;
    border : 1px solid #EDEDED;
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
    border-radius: 0 0 10px 10px;
`;

const OverCardPictureBottomFixed = styled.div`
    display : flex;
    justify-content : space-between
`;


const OverCardPictureBottomTitle = styled.div`
    float: left;
    font-size : 1rem;
    margin-top: 2%;
    font-weight: bold;
    line-height : 120%;
    width : 75%;
    color: rgba(0, 0, 0, 0.75);
`;

const OverCardPictureBottomTitleSub = styled.div`
    position: absolute;
    top: 55%;
    font-weight: bold;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.75);
`;
const OverCardPictureBottomDetail = styled.div`
    height : 25vh;
    margin-top : 4%
`;

const OverCardPictureBottomContent = styled.div`
    clear : both;
    font-size : 0.7rem;
    position : relative;
    top : -145%;
`;
const OverCardPictureBottomContentImage = styled.img`
    float :left;
    margin-right : 3%;
`;

const OverCardPictureBottomUserImage = styled.img`
    padding-left: 3%;
    float : left;
`;
const OverCardPictureBottomImage = styled.img`
    border-radius : 50%;
    width : 5vh;
`;

// Challenge Component by 승준 

const ChallengeContainer = styled.div`
  width: 100vw;
  height: 38vh;
  padding: 0% 6% 0 6%;
`;
const ChallengeList = styled.div`
  width: 100%;
  height: 80%;
  overflow: auto;
  margin-top: 27px;
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

const ChallengeImg = styled.div`
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
  
`;

const ChallengeFixed = styled.div`
    display : flex;
    justify-content : space-between;
    height : 5%;
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
  display: flex;
  align-items: center;
  color: #434444;
`;
const ChallengeContentDate = styled.div`
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
`;

const ChallengeContentProgress = styled.div`
    margin-top : 10%;
    width : 95%;
    text-align : center;
    font-size : 0.7rem;
    &&{
        .ant-progress-text {
            color : dimgray;
        }
        .ant-progress-bg{
            height : 5px !important;
        }
        .ant-progress-small.ant-progress-line, .ant-progress-small.ant-progress-line .ant-progress-text .anticon{
            padding-right : 20%;
        }
    }
`;

const ChallengeContentProgressText = styled.div`
    position : relative;
    bottom : 3vh;
    float :right;
    color : dimgray;
`;

// 함께하고 있는 챌린지 Styled

const CarouselArray = [
    "1",
    "2",
    "3"
  ];

const MyChallenge = ({ detailRouter, bottomDetailRouter }) => {

    return ( 
        <Fragment>
            <ContentsTitle>
                도전중인 챌린지
            </ContentsTitle>

            <Contents>
                <ContentsOne>
                    <OverCarousel dotPosition={"bottom"}>
                        {CarouselArray.map((elem, index) => 
                            <OverCard bordered={false} key={index} onClick={() => detailRouter(elem)}>
                                <OverCardPicture>
                                    <OverCardPictureTop>

                                        <OverCardPictureTopLayerOne>
                                            <span style={{color:"red"}}>{`1`}</span>  / {`2`}
                                            <Progress percent={50} status="active" showInfo={false} size="small" strokeColor="#EB6363"/>
                                        </OverCardPictureTopLayerOne>

                                        <OverCardPictureTopLayerTwo>
                                            {/* <img src ={defaultImage} alt ="default" height = "100%" width = "100%"/> */}
                                        </OverCardPictureTopLayerTwo>

                                    </OverCardPictureTop>

                                    <OverCardPictureBottom>
                                        <OverCardPictureBottomFixed>
                                            <OverCardPictureBottomTitle>{`정다은, 박준영`} 외 {`4`}명과</OverCardPictureBottomTitle>
                                            <OverCardPictureBottomTitleSub>{`가족회의`}</OverCardPictureBottomTitleSub>
                                            <OverCardPictureBottomDetail>
                                                <OverCardPictureBottomImage src ={defaultImage} alt ="default" height = "20%" width = "20%"/>                            
                                                
                                                
                                            </OverCardPictureBottomDetail>
                                        </OverCardPictureBottomFixed>
                                        <OverCardPictureBottomContent>
                                            <OverCardPictureBottomContentImage src={calendarImage} alt="" width = "6%"/>
                                            <span style={{float : "left"}}>{`11.20 (수)`}</span>
                                            <OverCardPictureBottomUserImage src={userImage} alt="" width = "10%"/>
                                            <span style={{marginLeft: "2%"}}>{`3명`}</span>
                                        </OverCardPictureBottomContent>

                                    </OverCardPictureBottom>
                                </OverCardPicture>
                            </OverCard>
                        )}
                    </OverCarousel>
                </ContentsOne>
            </Contents>



            <ChallengeContainer>
                <ContentsTitle style={{paddingLeft : 0}}>
                        함께하는 챌린지
                </ContentsTitle>
                <ChallengeList>
                    {CarouselArray.map((elem, index) => 
                        <ChallengeCard key={index} onClick={() => bottomDetailRouter(elem)}>

                        <ChallengeImg />
                        <ChallengeContent>

                        <ChallengeFixed>
                        <ChallengeContentTitle>{`영화보기`}</ChallengeContentTitle>

                        <OverCardPictureBottomDetail style={{marginTop : 0}}>
                            <OverCardPictureBottomImage src ={defaultImage} alt ="default" height = "20%" width = "20%"/>                            
                            
                            
                        </OverCardPictureBottomDetail>
                        </ChallengeFixed>

                        <ChallengeContentDate>
                            <OverCardPictureBottomContentImage src={calendarImage} alt="" width = "7%"/>
                            {`11.20 (수)`}
                            
                        </ChallengeContentDate>

                        <ChallengeContentProgress>
                            <Progress percent={50} showInfo={false} status="active" size="small" strokeColor="#EB6363"/> 
                            <ChallengeContentProgressText>        
                            <span style={{color:"red"}}>{`1`}</span> / {`2`}
                            </ChallengeContentProgressText>
                        </ChallengeContentProgress>

                        </ChallengeContent>
                    </ChallengeCard>

                    )}
                    
                </ChallengeList>
            </ChallengeContainer>


        </Fragment> 
    );
}
 
export default MyChallenge;