import React, { Fragment } from 'react';
import { Layout, Carousel, Card, Progress } from 'antd'; 
import styled from 'styled-components';
import defaultImage from '../images/default.PNG';

import detailRight from '../images/detailRightButton.png';
import Headers from './statics/HeaderLayout';
import ChosensContainer from '../containers/ChosensContainer';


const { Content } = Layout;


const ContentsTitle = styled.div`
    height : 8vh;
    padding-top : 5%;
    padding-left : 6%;
    font-weight: bold;
    font-size: 1rem;
    font-style : normal;
    
`;
const Contents = styled(Content)`
    margin : 0px 20%;
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
        height : 37vh;
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
    height: 33vh;
    background-color : whitegray;
`;

const OverCardPictureTop = styled.div`height: 67%;`;
const OverCardPictureBottom = styled.div`
    margin-top : -1.5vh;
    height : 30%;
    padding : 0px 5%;
    background-color : whitesmoke;
`;

const OverProgress = styled(Progress)`
    &&{
        .ant-progress-inner{
            border-radius : 0px;
        }
        .ant-progress-success-bg, .ant-progress-bg{
            border-radius : 0px;
        }
        .ant-progress-outer{
            float :left;
            padding-right : 0px;
        }
        .ant-progress-bg{
            height : 12px !important;
        }
        .ant-progress-text{
            color : black;
            font-size : 87%;
            position: absolute;
            left : 0px;
            top : 1vh;
        }
        .ant-progress-inner{
            background-color : lightgray;
        }
    }
    display : block;
    font-size : 13px;
    line-height : 0px;
`;

const OverCardPictureBottomTitle = styled.span`
    float: left;
    font-size : 1%;
    margin-top: 5%;
    font-weight: bold;
`;
const OverCardPictureBottomDetail = styled.span`
    float : right;
    font-size : 1%;
    width:  70%;
    -webkit-transform: scale(0.75);
    position: absolute;
    right: -3vh;
`;

const OverCardPictureBottomContent = styled.div`
    clear : both;
    font-size : 1%;
    color : black;
    -webkit-transform: scale(0.7);
    position : absolute;
    top : 85%;
    left : -12px;
    font-weight: bold;
`;

const OverCardPictureBottomHashTag = styled.div`
    position: absolute;
    top: 93%;
    font-size : 1%;
    color: darkgray;
    -webkit-transform: scale(0.9);
    left: 10px;
`;


// 함께하고 있는 챌린지 Styled

const DivEntireContent = styled.div`
    height : 23vh;
`;

const DivContent = styled.div`
    height : 50%;
`;

const DivContentImg = styled.div`
    width : 20%;
    float : left;
    height : 100%;
    text-align : right;
    vertical-align : middle;
    line-height: 11vh;
`;
const DivContentText = styled.div`
    width : 65%;
    float : left;
    height : 100%;
    margin-left : 5%;
    vertical-align : middle;
    line-height : 5vh;
`;

const DivContentTitle = styled.div`
    font-size : 1%;
    font-weight : bold;    
`;
const DivContentSub = styled.div`
    font-size : 1%;
    -webkit-transform: scale(0.7);
    color : black;
    font-weight : bold;
    position : absolute;
    left : 19%;
`;

const DivContentSubImg = styled.div`
    margin-left : 5%;
    position : relative;
    top : 18%;
    left : -1%;
`;

const DivContentRightImg = styled.div`
    float : left;
    height : 100%;
    vertical-align : middle;
    line-height : 10vh;
    margin-left : 3%;
`;

const MyChallenge = ({ detailRouter, bottomDetailRouterOne, bottomDetailRouterTwo }) => {
    return ( 
        <Fragment>

            <Headers/>
            <ChosensContainer/>

            <ContentsTitle>
                도전중인 챌린지
            </ContentsTitle>

            <Contents onClick={detailRouter}>
                <ContentsOne>
                    <OverCarousel dotPosition={"bottom"}>
                        <OverCard bordered={false}>
                            <OverCardPicture>
                                <OverCardPictureTop>
                                    <img src ={defaultImage} alt ="default" height = "100%" width = "100%"/>
                                </OverCardPictureTop>

                                    <OverProgress percent={50} status="active" strokeColor="bisque" style={{height : 10, top : "-2vh"}}/>
                                
                                <OverCardPictureBottom>

                                        <OverCardPictureBottomTitle>저녁식사</OverCardPictureBottomTitle>
                                        <OverCardPictureBottomDetail>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", left : "15%", border : "3px solid bisque", msInterpolationMode : "bicubic"}}/>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", left : "5%", border : "3px solid bisque"}}/>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", right : "5%", border : "3px solid bisque"}}/>    
                                            자세히 보기
                                            
                                        </OverCardPictureBottomDetail>

                                    <OverCardPictureBottomContent>
                                        9월 12일 ~ 13일, 목금 | 인증횟수 2회
                                    </OverCardPictureBottomContent>
                                    <OverCardPictureBottomHashTag>
                                        #식사 #저녁
                                    </OverCardPictureBottomHashTag>
                                </OverCardPictureBottom>
                            </OverCardPicture>
                        </OverCard>
                        
                        <OverCard bordered={false}>
                            <OverCardPicture>
                                <OverCardPictureTop>
                                    <img src ={defaultImage} alt ="default" height = "100%" width = "100%"/>
                                </OverCardPictureTop>

                                    <OverProgress percent={50} status="active" strokeColor="bisque" style={{height : 10, top : "-2vh"}}/>
                                
                                <OverCardPictureBottom>

                                        <OverCardPictureBottomTitle>저녁식사</OverCardPictureBottomTitle>
                                        <OverCardPictureBottomDetail>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", left : "15%", border : "3px solid bisque", msInterpolationMode : "bicubic"}}/>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", left : "5%", border : "3px solid bisque"}}/>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", right : "5%", border : "3px solid bisque"}}/>    
                                            자세히 보기
                                            
                                        </OverCardPictureBottomDetail>

                                    <OverCardPictureBottomContent>
                                        9월 12일 ~ 13일, 목금 | 인증횟수 2회
                                    </OverCardPictureBottomContent>
                                    <OverCardPictureBottomHashTag>
                                        #식사 #저녁
                                    </OverCardPictureBottomHashTag>
                                </OverCardPictureBottom>
                            </OverCardPicture>
                        </OverCard>
                        
                        <OverCard bordered={false}>
                            <OverCardPicture>
                                <OverCardPictureTop>
                                    <img src ={defaultImage} alt ="default" height = "100%" width = "100%"/>
                                </OverCardPictureTop>

                                    <OverProgress percent={50} status="active" strokeColor="bisque" style={{height : 10, top : "-2vh"}}/>
                                
                                <OverCardPictureBottom>

                                        <OverCardPictureBottomTitle>저녁식사</OverCardPictureBottomTitle>
                                        <OverCardPictureBottomDetail>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", left : "15%", border : "3px solid bisque", msInterpolationMode : "bicubic"}}/>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", left : "5%", border : "3px solid bisque"}}/>
                                            <img src ={defaultImage} alt ="default" height = "25%" width = "20%" style={{height : "4.5vh", float:"left", borderRadius : "50%", position : "relative", right : "5%", border : "3px solid bisque"}}/>    
                                            자세히 보기
                                            
                                        </OverCardPictureBottomDetail>

                                    <OverCardPictureBottomContent>
                                        9월 12일 ~ 13일, 목금 | 인증횟수 2회
                                    </OverCardPictureBottomContent>
                                    <OverCardPictureBottomHashTag>
                                        #식사 #저녁
                                    </OverCardPictureBottomHashTag>
                                </OverCardPictureBottom>
                            </OverCardPicture>
                        </OverCard>

                    </OverCarousel>
                </ContentsOne>
            </Contents>

            <ContentsTitle>
                    함께 하고 있는 챌린지
            </ContentsTitle>

            <DivEntireContent>
                <DivContent style={{borderBottom : "1px solid lightgray"}} onClick={bottomDetailRouterOne}>
                    <DivContentImg>
                        <img src ={defaultImage} alt ="default" height = "80%" width = "80%"/>
                    </DivContentImg>

                    <DivContentText>
                        <DivContentTitle>
                            가평 1박 2일 여행
                        </DivContentTitle>

                        <DivContentSub style={{top: "68.5%"}}>
                            9월 7일 ~ 8일, 토일 | 인증횟수 2회
                        </DivContentSub>
                        <DivContentSubImg>
                            <img src ={defaultImage} alt ="default" height = "15%" width = "10%" style={{height : "3.5vh", float:"left", borderRadius : "50%", position : "relative", right : "5%", border : "3px solid bisque"}}/>
                        </DivContentSubImg>

                    </DivContentText>

                    <DivContentRightImg>
                        <img src ={detailRight} alt ="default" style={{height : "4vh"}}/>
                    </DivContentRightImg>

                </DivContent>

                <DivContent onClick={bottomDetailRouterTwo}>
                    <DivContentImg>
                        <img src ={defaultImage} alt ="default" height = "80%" width = "80%"/>
                    </DivContentImg>

                    <DivContentText>
                        <DivContentTitle>
                            조조 영화 관람
                        </DivContentTitle>

                        <DivContentSub style={{top: "79.8%"}}>
                            9월 11일, 수 | 인증횟수 1회
                        </DivContentSub>

                        <DivContentSubImg>
                            <img src ={defaultImage} alt ="default" height = "15%" width = "10%" style={{height : "3.5vh", float:"left", borderRadius : "50%", position : "relative", right : "5%", border : "3px solid bisque"}}/>
                        </DivContentSubImg>

                    </DivContentText>
                    
                    <DivContentRightImg>
                            <img src ={detailRight} alt ="default" style={{height : "4vh"}}/>
                    </DivContentRightImg>

                </DivContent>
            </DivEntireContent>
        
        </Fragment> 
    );
}
 
export default MyChallenge;
