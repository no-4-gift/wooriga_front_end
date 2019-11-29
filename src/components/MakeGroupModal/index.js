import React from "react";
import styled, { css } from "styled-components";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";
import Pallete from "./Pallete";
import ModalFooter from "./ModalFooter";
import PropTypes from "prop-types";

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(123, 123, 123, 0.8);
  z-index: -2;
  opacity: 0;
  transition: 0.25s ease-in;
  ${props =>
    props.active &&
    css`
      z-index: 10;
      opacity: 1;
    `}
`;

const ModalTemplate = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 280px;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
  transform: translate(-50%, -50%) scale(0.7);
  opacity: 0;
  z-index: -3;
  transition-delay: 0.25s;
  transition-duration: 0.25s;
  transition-timing-function: ease-in;
  ${props =>
    props.active &&
    css`
      z-index: 12;
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    `}
`;
const ModalBody = styled.div`
  width: 100%;
  padding: 18px;
`;

function MakeGroupModal({
  title,
  text,
  toggle,
  kind,
  code,
  color,
  onChange,
  onCancle,
  onSubmit,
  onSelectColor
}) {
  return (
    <BackgroundWrapper active={toggle}>
      <ModalTemplate active={toggle}>
        <ModalBody>
          <TopContent title={title} kind={kind} code={code} />
          <BottomContent text={text} onChange={onChange} />
          <Pallete selectedColor={color} onSelectColor={onSelectColor} />
        </ModalBody>
        <ModalFooter onCancle={onCancle} onSubmit={onSubmit} />
      </ModalTemplate>
    </BackgroundWrapper>
  );
}

MakeGroupModal.propTypes = {
  title: PropTypes.string.isRequired,
  toggle: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  kind: PropTypes.number.isRequired,
  code: PropTypes.string,
  color: PropTypes.string.isRequired,
  onCancle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onSelectColor: PropTypes.func.isRequired
};

export default MakeGroupModal;
