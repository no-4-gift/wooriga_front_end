import React, { Fragment } from "react";
import styled, { css, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
function PromiseCardModal({ members, visible, text, onChange, onCancle, onSubmit }) {
  const to = members.map(elem => elem.name).join(",");

  return (
    <Fragment>
      <GlobalStyle visible={visible} />
      <DarkBackGround visible={visible}>
        <ModalBlock>
          <CardTemplate>
            <CardHead>
              <span>각오의 한마디</span>
            </CardHead>
            <CardBody>
              <ToContainer>
                <span>To.&nbsp;{to}&nbsp;에게</span>
              </ToContainer>
              <InputContainer>
                <textarea
                  onChange={onChange}
                  value={text}
                  cols={"15"}
                  rows="10"
                  maxLength={"150"}
                  placeholder="각오를 적어주세요!(최대 150자)"
                  required
                />
              </InputContainer>
              <PromiseText>
                <span>PROMISE</span>
              </PromiseText>
            </CardBody>
            <CancelButton onClick={onCancle}>
              <span>취소</span>
            </CancelButton>
            <ConfirmButton onClick={onSubmit}>
              <span>확인</span>
            </ConfirmButton>
          </CardTemplate>
        </ModalBlock>
      </DarkBackGround>
    </Fragment>
  );
}
export default PromiseCardModal;

PromiseCardModal.propTypes = {
  members: PropTypes.array.isRequired,
  visible: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onCancle: PropTypes.func.isRequired
};

const DarkBackGround = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(123, 123, 123, 0.8);
  opacity: 0;
  transition: 1s linear;
  z-index: 10;
  display: none;
  overflow: hidden;
  ${props =>
    props.visible &&
    css`
      opacity: 1;
      z-index: 10;
      display: block;
    `}
`;

const ModalBlock = styled.div`
  position: relative;
  width: 280px;
  height: 460px;
  display: block;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 11;
  background: #ffffff;
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.3);
`;

const CardTemplate = styled.div`
  position: absolute;
  top: 32px;
  left: 15.5px;
  width: 250px;
  height: 370px;
  border: 1px solid #000000;
  border-radius: 10px 10px 10px 10px;
`;

const CardHead = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  padding: 0 6% 0 6%;
  align-items: center;
  border-bottom: 1px solid #000000;
  span {
    font-family: Noto Sans KR, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #434444;
  }
`;
const CardBody = styled.div`
  width: 100%;
  height: 330px;
  padding: 7px 10.5px 7px 10.5px;
`;
const ToContainer = styled.div`
  width: 100%;
  height: 20px;
  text-align: right;
  span {
    font-family: Noto Sans KR, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #000000;
  }
`;

const InputContainer = styled.div`
  width: 100%;
  height: 224px;
  margin-top: 17px;
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    border: none;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    text-decoration-line: underline;
    color: #434444;
  }
`;

const PromiseText = styled.div`
  width: 100%;
  height: 30px;
  margin-top: 5px;
  text-align: right;
  span {
    font-family: Megrim, cursive;
    font-style: normal;
    font-weight: 500;
    font-size: 50px;
    line-height: 58px;
    color: #b5b5b5;
  }
`;

const CancelButton = styled.div`
  position: relative;
  left: 0px;
  top: 15px;
  width: 35px;
  height: 18px;
  span {
    font-family: Noto Sans KR, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #969696;
  }
`;

const ConfirmButton = styled.div`
  position: relative;
  left: 208px;
  width: 35px;
  height: 18px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.02em;
    color: #eb6363;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${props =>
    props.visible &&
    css`
      body {
        overflow: hidden;
        width: 100%;
        height: 100%;
      }
    `}
`;
