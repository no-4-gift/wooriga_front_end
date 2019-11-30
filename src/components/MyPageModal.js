import React, { Component, Fragment } from "react";
import styled, { css } from "styled-components";
import { Input, Button, Typography } from "antd";
import PropType from "prop-types";
import { colorSelector, profileColor } from "../styleUtils/colorStyle";
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
  width: 100px;
  height: 100px;
  border: 2px solid ${profileColor};
  border-radius: 5rem;
  text-align: center;
  float: center;
  margin: 1rem 50% 0 33%;
  box-sizing: border-box;
  background-image: url(${props => props.img});
  background-size: contain;
  background-repeat: none;

  & + & {
    margin-left: 7px;
  }
`;

const MyIconimg = styled.img`
  width: 30px;
  height: 30px;
  margin: 4.5rem 0 0 4.5rem;
`;
const MemberInfoTitle = styled.text`
  width: 30%;
  color: darkgray;
  font-weight: bold;
  font-size: 20px;
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
  userId,
  myname,
  myrelation,
  //logged,
  onLogout,
  onSave,
  onClose,
  onChange,

  pictureUrl,
  fileOnChange,
  $imagePreview,
  imagePreviewUrl
}) {
  let myinfo = members.filter(elem => elem.uid === userId)[0];
  let memberColors = members.map(elem => elem.color);
  console.log("mypagemodal-----------");
  console.log(myinfo);
  console.log(members);
  console.log(memberColors);
  console.log(userId);
  console.log("mypagemodal-----------");

  const handleChange = e => {
    console.log("-----------이게 바뀌나?");
    console.log(this.state.myname);
    console.log(this.state.myrelation);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //프로필 색깔
  const PaletteItem = ({ color, active, onClick, customcolor }) => {
    const mycolor = members.find(member => member.uid === userId).color;
    let memberColors = members
      .map(elem => elem.color)
      .filter(elem => elem !== mycolor);
    //.filter(elem => membercolor !== userInfo.color);
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
    } else if (myinfo.color === mycolor) {
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
  if (members.find(member => member.uid === userId)) {
    $imagePreview = (
      <>
        <label htmlFor="file-input">
          {/* <img
            id={circlePlus}
            src={circlePlus}
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
          id="file-input"
          type="file"
          name="file"
          onChange={e => fileOnChange(e)}
        />
      </>
    );
  } else {
    $imagePreview = (
      <>
        <label htmlFor="file-input">
          <img
            src={circlePlus}
            alt={"circlePlus"}
            style={{ width: "40%", height: "40%", margin: "3rem 0 0 3rem" }}
          />
        </label>
        <input
          style={{ display: "none" }}
          id="file-input"
          type="file"
          name="file"
          onChange={e => fileOnChange(e)}
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
        {/* <form onSubmit={this.handleSubmit}> */}
        {members
          .filter(x => x.uid === userId)
          .map(member => (
            <>
              {member.profile ? (
                <MyIcon color={member.color} img={member.profile}>
                  <input
                    style={{ display: "none" }}
                    id="file-input"
                    type="file"
                    name="file"
                    accept="image/*"
                    capture="camera"
                    onChange={e => fileOnChange(e, userId)}
                  />
                  <MyIconimg
                    id={"circlePlus"}
                    src={circlePlus}
                    alt="circlePlus"
                    width="100%"
                    height="100%"
                  />
                </MyIcon>
              ) : (
                <MyIcon color={member.color}></MyIcon>
              )}
              <br />
              <div
                style={{
                  borderBottom: "1px solid lightgray",
                  fontsize: "initial"
                }}
              >
                <MemberInfoTitle>이름</MemberInfoTitle>

                <Input
                  placeholder={member.name}
                  style={{
                    border: "none",
                    margin: "0 0 0 2.5rem",
                    width: "70%",
                    fontweight: "bold",
                    fontSize: "20px"
                  }}
                  value={myname}
                  name="myname"
                  // onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  borderBottom: "1px solid lightgray",
                  fontsize: "initial"
                }}
              >
                <MemberInfoTitle>관계</MemberInfoTitle>
                <Input
                  placeholder={member.relationship}
                  style={{
                    border: "none",
                    margin: "0 0 0 2.5rem",
                    width: "70%",
                    fontweight: "bold",
                    fontSize: "20px"
                  }}
                  value={myrelation}
                  name="myrelation"
                  // onChange={this.handleChange}
                />
              </div>
              <div
                style={{
                  borderBottom: "1px solid lightgray",
                  margin: "0.8rem 0",
                  fontsize: "inherit"
                }}
              >
                <MemberInfoTitle>KakaoID</MemberInfoTitle>
                <Text
                  style={{
                    margin: "0 0 0 1.5rem",
                    width: "70%",
                    color: "darkgray",
                    fontweight: "bold",
                    fontSize: "20px"
                  }}
                >
                  {userId}
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
            </>
          ))}
        <br /> <br />
        <Button onClick={onSave} style={{ float: "right", fontweight: "bold" }}>
          저장
        </Button>
        <Button onClick={onClose}>취소</Button>
        {/* </form> */}
      </ModalTemplate>
    </ModalBackground>
  );
}

MyPageModal.propTypes = {
  visible: PropType.bool,
  onClose: PropType.func,
  members: PropType.array.isRequired,
  userId: PropType.number.isRequired,
  onLogout: PropType.func,
  onSave: PropType.func,
  ImgOnChange: PropType.func,
  onChange: PropType.func
};

export default MyPageModal;
