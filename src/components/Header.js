import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import loginInfo from "../containers/LoginContainer";

function Header({ logged, onLogout }) {
  return (
    <Container>
      <Element>
        {logged ? (
          <ShortCut>
            <Link to="/" onClick={onLogout}>
              로그아웃
            </Link>
          </ShortCut>
        ) : (
          <ShortCut>
            <Link to="/login">로그인/회원가입</Link>
          </ShortCut>
        )}
        {/* <Logo>
            <img
              width="100%"
              height="100%"
              src="http://cfs9.blog.daum.net/upload_control/download.blog?fhandle=MENlZWVAZnM5LmJsb2cuZGF1bS5uZXQ6L0lNQUdFLzAvMTQuanBnLnRodW1i&filename=14.jpg"
              alt="logo"
            />
          </Logo>
          <Search>
            <h1>우리가</h1>
          </Search> */}
      </Element>
    </Container>
  );
}

export default Header;

const ShortCut = styled.div`
  order: 1;
  width: 100%;
  height: 20px;
  text-align: left;
  background-color: #a8ff78;
`;

const Container = styled.div`
  width: 100%;
  border-bottom: 1px solid #d1d8e4;
`;

const Element = styled.div`
  margin: 0 auto;
  width: 375px;
  height: 30px;
  display: flex;
  flex-flow: row wrap;
`;

const Logo = styled.div`
  order: 2;
  width: 200px;
  height: 80px;
`;

const Search = styled.div`
  order: 3;
  width: 880px;
  background-color: #78ffd6;
  text-align: center;
`;
