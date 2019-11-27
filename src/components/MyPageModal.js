import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import { Input, Button, Typography } from "antd";
import PropType from "prop-types";
//import "../styleUtils/ColorPicker.css";
import circlePlus from "../images/circlePlus.PNG";
import check from "../images/check.png";
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
  height: 34rem;
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
const MyIcon = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  border: 2px solid ${props => props.color};
  border-radius: 5rem;
  text-align: center;
  float: center;
  margin: 1rem 36%;
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
function MyPageModal({
  members,
  visible,
  myid,
  logged,
  onLogout,
  onSave,
  onClose,
  ImgOnChange,
  imageUrl,
  $initImg,
  onChange
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
  console.log(logged);
  console.log(imageUrl);
  console.log($initImg);
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

  //프로필 사진
  if (imageUrl) {
    $initImg = (
      <>
        <label htmlFor="file-input2">
          {/* <img
            id={circlePlus}
            src={imageUrl}
            alt="imageUrl"
            width="100%"
            height="100%"
          /> */}
          <img
            src={circlePlus}
            alt={"circlePlus"}
            style={{ width: "40%", height: "40%", margin: "3rem 0 0 3rem" }}
          />
        </label>
        <input
          style={{ display: "none" }}
          id="file-input2"
          type="file"
          name="file"
          onChange={e => ImgOnChange(e)}
        />
      </>
    );
  } else {
    $initImg = (
      <>
        <label htmlFor="file-input">
          <img src={circlePlus} alt={"circlePlus"} height="30%" />
        </label>

        <input
          style={{ display: "none" }}
          id="file-input"
          type="file"
          name="file"
          accept="image/*"
          capture="camera"
          onChange={e =>
            fileOnChange(
              e,
              memberData[0].challengeBarInfo.registeredId,
              cardDate
            )
          }
        />

        <label htmlFor="file-input">
          {/* <img
            src={circlePlus}
            alt={"circlePlus"}
            style={{ width: "40%", height: "40%", margin: "3rem 0 0 3rem" }}
          /> */}
          <img
            id={circlePlus}
            src={imageUrl}
            alt="imageUrl"
            width="100%"
            height="100%"
          />
        </label>
        <input
          style={{ display: "none" }}
          id="file-input"
          type="file"
          name="file"
          onChange={e => ImgOnChange(e)}
        />
      </>
    );
  }

  return (
    <ModalBackground visible={visible}>
      <ModalTemplate visible={visible}>
        <Text style={{ float: "right" }} onClick={onLogout}>
          로그아웃
        </Text>
        <br />
        {/* <MyIcon /> */}
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
        {/* <MyIcon onClick {e => ImgOnChange(e)}/> */}
        {/* <div onClick={e => ImgOnChange(e)}>선택 후 이미지 업로드</div> */}
        <br />
        <div
          style={{ borderBottom: "1px solid lightgray", fontsize: "initial" }}
        >
          <Text
            style={{
              width: "30%",
              color: "darkgray",
              fontweight: "bold"
            }}
          >
            이름
          </Text>
          <Input
            placeholder={name}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          />
        </div>
        <div
          style={{ borderBottom: "1px solid lightgray", fontsize: "initial" }}
        >
          <Text
            style={{
              width: "30%",
              color: "darkgray",
              fontweight: "bold"
            }}
          >
            관계
          </Text>
          <Input
            placeholder={relation}
            style={{
              border: "none",
              margin: "0 0 0 2.5rem",
              width: "70%",
              fontweight: "bold"
            }}
          />
        </div>
        <div
          style={{
            borderBottom: "1px solid lightgray",
            margin: "0.8rem 0",
            fontsize: "inherit"
          }}
        >
          <Text style={{ width: "30%", color: "darkgray" }}>KakaoID</Text>
          <Text
            style={{
              margin: "0 0 0 1.5rem",
              width: "70%",
              color: "darkgray",
              fontweight: "bold"
            }}
          >
            {myid}
          </Text>
        </div>
        <br />
        <Text strong style={{ fontSize: "large" }}>
          컬러
        </Text>
        <br />
        <Text style={{ fontSize: "small" }}>
          자신을 표현할 색상을 골라주세요
        </Text>
        <Palette selected="#f44336" />
        <br /> <br />
        <Button onClick={onSave} style={{ float: "right", fontweight: "bold" }}>
          저장
        </Button>
        <Button onClick={onClose}>취소</Button>
      </ModalTemplate>
    </ModalBackground>
  );
}
//}

MyPageModal.propTypes = {
  visible: PropType.bool,
  onClose: PropType.func,
  id: PropType.number,
  members: PropType.array,
  onLogout: PropType.func,
  onSave: PropType.func,
  ImgOnChange: PropType.func,
  onChange: PropType.func
};

export default MyPageModal;
