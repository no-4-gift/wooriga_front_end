import React from "react";
import styled, { keyframes, css } from "styled-components";
import { Button } from "antd";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const DarkBackground = styled.div`
  z-index: 2;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);

  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${fadeIn};
  animation-fill-mode: forwards;
`;

const DialogBlock = styled.div`
  width: 520px;
  padding: 1.5rem;
  background: white;
  border-radius: 2px;

  h3 {
    margin: 0;
    font-size: 1.5rem;
    border-bottom: 1px solid black;
  }
  ul {
    padding: 20px;
  }
  animation-duration: 0.25s;
  animation-timing-function: ease-out;
  animation-name: ${slideUp};
  animation-fill-mode: forwards;
`;

function ShowCalendarModal({ currenDate, onConfirm, dates }) {
  return (
    <DarkBackground>
      <DialogBlock>
        <h3>{currenDate}의 시간이 비는 멤버</h3>
        <ul>
          {dates.map(elem => elem.date === currenDate && <li>{elem.name}</li>)}
        </ul>
        <Button onClick={onConfirm} type="primary" block>
          확인
        </Button>
      </DialogBlock>
    </DarkBackground>
  );
}

export default ShowCalendarModal;
