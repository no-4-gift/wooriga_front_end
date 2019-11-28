import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import {  Button, Typography } from "antd";
import PropType from "prop-types";
import circlePlus from "../images/circlePlus.PNG";
const { Text } = Typography;

const PaletteDiv = styled.div`
  color: black;
  margin: 0.8rem 0;
  display: inline-flex;
  flex-wrap: wrap-reverse;
  text-align: center;
  font-size: large;
  font-weight: bold;

  &:colors {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  &: h2 {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const PaletteItemDiv = styled.div`
  border-radius: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  border: 2px solid white;
  opacity: 0.7;
  margin: 0.25rem;
  padding: 0.25rem 0;
  background: ${props => props.membercolor};

  &:hover {
    opacity: 0.9;
    border: 2px solid red;
  }

  ${props =>
    props.IsAlreadySet &&
    css`
    borderColor: black;
    border: solid;
    pointer-events: none;
    }
  `};

  ${props =>
    props.active &&
    css`
      opacity: 1;
    }
  `};
`;
// 화면을 불투명하게 해줍니다.
const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(123, 123, 123, 0.8);
  overflow: hidden;
  opacity: 0;
  transition: 0.25s linear;
  z-index: -1;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      z-index: 2;
    `}
`;

const ModalTemplate = styled.div`
  background-color: white;
  position: fixed;
  height: auto;
  height: 39rem;
  width: 20rem;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(0, 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

  ${props =>
    props.visible &&
    css`
      transform: translate(-50%, -50%);
      z-index: 15;
    `}
`;
const DivTitle = styled.text`
font-weight : bold;
font-size: 24px;
`;
const MyIcon = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 2px solid ${props => props.color};
  border-radius: 5rem;
  text-align: center;
  float: left;
  margin: 2rem 36% 0 36%;
`;

const MyIconimg = styled.img`
  box-sizing: border-box;
  border-radius: 50px;
  width: 80px;
  height: 80px;
  margin-top: "2%";
  margin-left: 3%;
  float: left;
`;
const MemberInfoContainter = styled.div`
    height: 20%;
    position: relative;
`;
const ProfilImgContainer = styled.div`
    float:left;
    width: 10%;
`;
const MemberInfo = styled.div`
    float:right;
    width:90%;
    margin:0.6rem 0;

`;
const PaletteContainer = styled.div`
    height: 25%;
    position: relative;
    margin: 1rem 0;
`;


const InfoDiv = styled.div`
  margin: 0.2rem 0;
  fontsize: initial;
  float:right;
  width: 70%;
  `;

const InfoText = styled.text`

color: darkgray;
font-weight: bold;

${props =>
    props.IsNotKaKaoInput &&
    css`
    width: 30%;
    `} 
`;

const InfoInput = styled.textarea.attrs({
    required: true
  })`

    border: none;
    margin: 0 0 0 1.5rem;
    width: 55%;
    font-weight: bold;
    height: 24px;
    float: right;
  `

const colors = {
  black: "#000000",
  orangered: "#f44336",
  red: "#e91e63",
  violet: "#9c27b0",
  Darkviolet: "#673ab7",
  blue: "#2196f3",
  amerald: "#00bcd4",
  Darkgreen: "#009688",
  green: "#8bc34a",
  lightgreen: "#cddc39",
  yellow: "#ffeb3b",
  orange: "#ffc107"
};
function GroupAddModal({
  members,
  visible,
  myid,
  onSave,
  onClose,
  imageUrl,
  $initImg

}) {
  let name = members.find(member => member.id === myid).name;
  let relation = members.find(member => member.id === myid).relation;
  let mycolor = members.find(member => member.id === myid).color;
  console.log("mypagemodal-----------");
  console.log(mycolor);
  console.log(members);
  console.log(name);
  console.log(relation);
  console.log(visible);
  console.log(myid);
  console.log("mypagemodal-----------");

  //프로필 색깔
  const PaletteItem = ({ color, active, onClick, customcolor }) => {
    //const mycolor = members.find(member => member.id === myid).color;
    let memberColors = members
      .map(member => member.color)
      .filter(membercolor => membercolor !== mycolor);
    console.log(mycolor);
    console.log("*********membercolor******:" + memberColors);

    if (memberColors.find(x => x === color)) {
      return (
        <PaletteItemDiv
          active={`PaletteItem ${active ? "active" : ""}`}
          IsAlreadySet={true}
          membercolor={customcolor}
          checkColor={"black"}
          onClick={onClick}
        >
          v
        </PaletteItemDiv>
      );
    } else if (mycolor === color) {
      return (
        <PaletteItemDiv
          active={`PaletteItem ${active ? "active" : ""}`}
          IsAlreadySet={true}
          membercolor={customcolor}
          onClick={onClick}
        >
          ME
        </PaletteItemDiv>
      );
    } else {
      return (
        <PaletteItemDiv
          active={`PaletteItem ${active ? "active" : ""}`}
          membercolor={customcolor}
          onClick={onClick}
        />
      );
    }
  };

  const Palette = ({ selected }) => {
    return (
      <PaletteDiv>
        {Object.keys(colors).map(color => (
          <PaletteItem
            color={color}
            customcolor={colors[color]}
            key={color}
            active={selected === color}
          />
        ))}
      </PaletteDiv>
    );
  };

  return (
    <ModalBackground visible={visible}>
      <ModalTemplate visible={visible}>
      <DivTitle>그룹 확인</DivTitle>
      <br/>
          <MemberInfoContainter>
          <ProfilImgContainer >
        {imageUrl ? (
          <MyIcon color={mycolor}>
            <MyIconimg
              id={"circlePlus"}
              src={imageUrl}
              alt="imageUrl"
              width="100%"
              height="100%"
            />
            {$initImg}
          </MyIcon>
        ) : (
          <MyIcon color={mycolor}>{$initImg}</MyIcon>
        )}
        </ProfilImgContainer>
        <br />
        <MemberInfo >
        <InfoDiv>
          <InfoText IsNotKaKaoInput={true}
          >
            가장
          </InfoText>
          {/* <Input
            placeholder={name}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          /> */}
          <InfoInput placeholder={name}/>
        </InfoDiv>
        <InfoDiv>
          <InfoText IsNotKaKaoInput={true}>
            구성원 수
          </InfoText>
          {/* <Input
            placeholder={relation}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          /> */}
          <InfoInput placeholder={relation}/>
        </InfoDiv>
        <div
          style={{
            margin: "0.5rem 0",
            fontsize: "inherit",
            float:"right",
            width:"70%"
          }}
        >
          <InfoText IsNotKaKaoInput={false}>초대코드</InfoText>
          {/* <Text
            style={{
              margin: "0 0 0 1.5rem",
              width: "70%",
              color: "darkgray",
              fontweight: "bold"
            }}
          > */}
          <Text style={{ marginLeft: "15px",fontWeight: "bold" }}>
            {myid}
          </Text>
        </div>
        </MemberInfo>
        </MemberInfoContainter>
        <br />
        <br />
        <DivTitle>내 정보 확인</DivTitle>
        <br/>
        <MemberInfoContainter>
          <ProfilImgContainer >
        {imageUrl ? (
          <MyIcon color={mycolor}>
            <MyIconimg
              id={"circlePlus"}
              src={imageUrl}
              alt="imageUrl"
              width="100%"
              height="100%"
            />
            {$initImg}
          </MyIcon>
        ) : (
          <MyIcon color={mycolor}>{$initImg}</MyIcon>
        )}
        </ProfilImgContainer>
        <br />
        <MemberInfo >
        <InfoDiv>
          <InfoText IsNotKaKaoInput={true} >
            이름
          </InfoText>
          {/* <Input
            placeholder={name}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          /> */}
          <InfoInput placeholder={name}/>
        </InfoDiv>
        <InfoDiv>
          <InfoText IsNotKaKaoInput={true}>
            관계
          </InfoText>
          {/* <Input
            placeholder={relation}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          /> */}
          <InfoInput placeholder={relation}/>
        </InfoDiv>
        <div
          style={{
            fontsize: "inherit",
            float:"right",
            width:"70%"
          }}
        >
          <InfoText IsNotKaKaoInput={false}>KakaoID</InfoText>
          {/* <Text
            style={{
              margin: "0 0 0 1.5rem",
              width: "70%",
              color: "darkgray",
              fontweight: "bold"
            }}
          > */}
          <Text style={{ marginLeft: "15px",fontWeight: "bold" }}>
            {myid}
          </Text>
        </div>
        </MemberInfo>
        </MemberInfoContainter>
        <PaletteContainer>
        <DivTitle>
          컬러
        </DivTitle>
        
        <br />
        <Text style={{ fontSize: "small" }}>
          자신을 표현할 색상을 골라주세요
        </Text>
        <Palette selected="#f44336" />
        </PaletteContainer>

        <br /> <br />
        {/* <Button onClick={onSave} style={{ float: "right", fontweight: "bold" }}> */}
        <Text style={{ float: "right", fontWeight: "bold" , fontSize:"18px"}} onClick={onSave}>   
          확인
        </Text>
        <Text style={{ float: "letf", fontWeight: "bold" ,fontSize:"18px",color: "gray"}} onClick={onClose}>취소</Text>
      </ModalTemplate>
    </ModalBackground>
  );
}
//}

GroupAddModal.propTypes = {
  visible: PropType.bool,
  onClose: PropType.func,
  onSave:PropType.func,
  id: PropType.number,
  onSave: PropType.func,
  members:PropType.array
};

export default GroupAddModal;
