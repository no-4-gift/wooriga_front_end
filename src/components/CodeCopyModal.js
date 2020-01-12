import React from "react";
import styled, { css } from "styled-components";

import PropType from "prop-types";

const CloseTxt = styled.text`
  float: left;
  font-size: 21px;
  margin: 0 5%;
`;
const CopyTxt = styled.text`
  float: right;
  font-size: 21px;
  margin: 0 5%;
  color: #eb6363;
`;
const VisitCodeText = styled.text`
  font-size: xx-large;
  font-weight: bold;
  margin: 23%;
`;

const VisitCodeTitle = styled.text`
  text-align: center;
  margin: 0 0 0 33%;
  font-size: large;
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
  height: 12rem;
  width: 20rem;
  padding: 1rem;
  top: 50%;
  left: 50%;
  transform: translate(100%, 100%);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 1.5rem;
  ${props =>
    props.visible &&
    css`
      transform: translate(-50%, -50%);
      z-index: 15;
    `}
`;

function CodeCopyModal({ visible, visitcode, onClose }) {
  console.log("CodeCopyModal-----------");
  console.log(visitcode);
  console.log("CodeCopyModal-----------");

  return (
    <ModalBackground visible={visible}>
      <ModalTemplate visible={visible}>
        <VisitCodeTitle>그룹초대코드</VisitCodeTitle>
        <br />
        <br />
        <VisitCodeText>{visitcode}</VisitCodeText>
        <br />
        <br />
        <CloseTxt onClick={onClose}>닫기</CloseTxt>
        <CopyTxt>복사</CopyTxt>
      </ModalTemplate>
    </ModalBackground>
  );
}
//}

CodeCopyModal.propTypes = {
  visible: PropType.bool,
  onClose: PropType.func,
  visitcode: PropType.string
};

export default CodeCopyModal;
