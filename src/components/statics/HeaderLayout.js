import React, { Fragment } from "react";
import logoImage from "../../images/logo2.png";
import { Layout } from "antd";
import styled from "styled-components";

const { Header } = Layout;

// Headers Components
const Headers = styled(Header)`
  width: 100vw;
  height: 8vh !important;
  line-height: 10px !important;
  background: white !important;
  padding: 0 15px !important;
  margin-right: 0;
  && {
  }
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
`;

const Logo = styled.div``;

const LogoImage = styled.img`
  width: 20%;
  position: absolute;
  top: -15.5%;
`;


// Contents Components

const HeaderLayout = ({ mainRouter }) => {
  return (
    <Fragment>
      <Headers>
        <Logo>
          <LogoImage src={logoImage} alt="default" onClick={mainRouter} />
          
        </Logo>
      </Headers>
    </Fragment>
  );
};

export default HeaderLayout;
