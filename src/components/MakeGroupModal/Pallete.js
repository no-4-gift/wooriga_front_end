import React from "react";
import styled from "styled-components";
import { colorSelector } from "../../styleUtils/colorStyle";
import { MdDone } from "react-icons/md";
import PropTypes from "prop-types";
import { pallete } from "../../themes/pallete";

const Container = styled.div`
  width: 100%;
  margin-top: 22px;
`;

const Title = styled.div`
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;

    letter-spacing: -0.02em;

    color: #434444;
  }
`;
const SubTitle = styled.div`
  margin-top: 8px;
  span {
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 14px;

    color: #949494;
  }
`;
const PalleteContainer = styled.div`
  margin-top: 13px;
  display: grid;
  width: 100%;

  grid-template-columns: repeat(6, 30px);
  grid-template-rows: repeat(2, 30px);
  grid-gap: 12px;
`;

const PalleteItemWrapper = styled.div`
  position: relative;
`;

const PalleteItem = styled.div`
  cursor: pointer;
  width: 30px;
  height: 30px;
  ${colorSelector}
  border-radius: 50px;
`;
const UnChoicePallete = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 28px;
  height: 28px;
  background: rgba(0, 0, 0, 0.2);
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
  border: 2px solid rgba(0, 0, 0, 0);
`;
const SelectedPallete = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid white;
  color: white;
  border-radius: 50px;
  transform: translate(-50%, -50%);
  font-size: 20px;
  font-weight: bold;
`;

function Pallete({ selectedColor, onSelectColor, colorList }) {
  return (
    <Container>
      <Title>
        <span>컬러</span>
      </Title>
      <SubTitle>
        <span>자신을 표현할 색상을 골라주세요.</span>
      </SubTitle>
      <PalleteContainer>
        {pallete.map((color, index) => (
          <PalleteItemWrapper key={index}>
            <PalleteItem color={color} onClick={() => onSelectColor(color)} />
            {colorList.findIndex(elem => elem === color) !== -1 && (
              <UnChoicePallete>
                <MdDone />
              </UnChoicePallete>
            )}
            {selectedColor === color && (
              <SelectedPallete>
                <MdDone />
              </SelectedPallete>
            )}
          </PalleteItemWrapper>
        ))}
      </PalleteContainer>
    </Container>
  );
}
Pallete.propTypes = {
  selectedColor: PropTypes.string.isRequired,
  onSelectColor: PropTypes.func.isRequired,
  colorList: PropTypes.array.isRequired
};

export default React.memo(Pallete);
