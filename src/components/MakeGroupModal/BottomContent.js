import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { profileColor } from "../../styleUtils/colorStyle";

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
  &::after {
    content: "";
    clear: both;
  }
  overflow: auto;
`;
const Text = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: -0.02em;

  color: #434444;
`;
const ContentBlock = styled.div`
  width: 100%;
  margin-top: 22px;
`;
const Profile = styled.div`
  float: left;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
  border-radius: 50px;
  ${profileColor}
  background: gray;
`;

const DetailBlock = styled.div`
  position: relative;
  top: -13px;
`;

const Detail = styled.div`
  & + & {
    margin-top: 8px;
  }
  border-bottom: 1px solid #ededed;
  width: 164px;
  float: right;
`;
const DetailTitle = styled.div`
  display: inline-block;
  width: 51px;

  span {
    font-family: "Noto Sans KR", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    letter-spacing: -0.02em;

    color: #949494;
  }
`;
const DetailText = styled.div`
  display: inline-block;
  width: 90px;
  margin-left: 7px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;

    ${props =>
      props.large &&
      css`
        font-weight: bold;
        font-size: 10px;
        line-height: 14px;
        letter-spacing: -0.02em;
      `}

    color: #434444;
  }
`;

const RelationInput = styled.input`
  display: inline-block;
  width: 105px;
  margin-left: 7px;
  border: none;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
`;

function BottomContent({ text, onChange }) {
  return (
    <Container>
      <Text>내 정보 확인</Text>
      <ContentBlock>
        <Profile color={"red"} />
        <DetailBlock>
          <Detail>
            <DetailTitle>
              <span>이름</span>
            </DetailTitle>
            <DetailText>
              <span>유인선</span>
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>
              <span>카카오 ID</span>
            </DetailTitle>
            <DetailText large>
              <span>kakao@kakao.com</span>
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>
              <span>관계</span>
            </DetailTitle>
            <RelationInput
              onChange={onChange}
              name="relationShip"
              type="text"
              value={text}
              placeholder="5글자 내로 입력해주세요"
            />
          </Detail>
        </DetailBlock>
      </ContentBlock>
    </Container>
  );
}

BottomContent.proptTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default React.memo(BottomContent);
