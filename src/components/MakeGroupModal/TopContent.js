import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { profileColor } from "../../styleUtils/colorStyle";

const Container = styled.div`
  width: 100%;
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
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.02em;
      `}
    ${props =>
      props.nomal &&
      css`
        font-weight: bold;
        font-size: 12px;
        line-height: 17px;
        letter-spacing: -0.02em;
      `}

    color: #434444;
  }
`;

function TopContent({ title, kind, code }) {
  const nomal = kind === 1 ? true : false;
  const large = kind === 2 ? true : false;
  return (
    <Container>
      <Text>{title}</Text>
      <ContentBlock>
        <Profile color={"red"} />
        <DetailBlock>
          <Detail>
            <DetailTitle>
              <span>가장</span>
            </DetailTitle>
            <DetailText>
              <span>유인선{kind === 1 && <span>(관리자)</span>}</span>
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>
              <span>구성원 수</span>
            </DetailTitle>
            <DetailText>
              {kind === 1 ? <span>1명</span> : <span>3명</span>}
            </DetailText>
          </Detail>
          <Detail>
            <DetailTitle>
              <span>초대코드</span>
            </DetailTitle>
            <DetailText nomal={nomal} large={large}>
              {kind === 1 ? <span>코드 미생성</span> : <span>{code}</span>}
            </DetailText>
          </Detail>
        </DetailBlock>
      </ContentBlock>
    </Container>
  );
}

TopContent.proptTypes = {
  title: PropTypes.string.isRequired,
  kind: PropTypes.number.isRequired,
  code: PropTypes.string.isRequired
};

export default React.memo(TopContent);
