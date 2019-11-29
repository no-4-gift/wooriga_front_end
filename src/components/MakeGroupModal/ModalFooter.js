import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FooterContainer = styled.footer`
  width: 100%;
  height: 46px;
  min-height: 46px;
  padding: 0 13px 0 13px;
  overflow: auto;
  &::after {
    content: "";
    clear: both;
  }
`;
const CancelButton = styled.div`
  cursor: pointer;
  background: none;
  border: none;
  float: left;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.02em;

  color: #969696;

  padding: 0;
`;
const ConfirmButton = styled.button`
  background: none;
  border: none;
  float: right;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;

  letter-spacing: -0.02em;

  color: #424242;

  padding: 0;
`;

function ModalFooter({ onSubmit, onCancle }) {
  return (
    <FooterContainer>
      <CancelButton onClick={onCancle}>취소</CancelButton>
      <ConfirmButton onClick={onSubmit}>확인</ConfirmButton>
    </FooterContainer>
  );
}

ModalFooter.propTypes = {
  onCancle: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};
export default ModalFooter;
