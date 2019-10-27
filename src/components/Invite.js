import React, { Component } from "react";
import { Layout, Typography, Button } from "antd";
import logoImage from "../images/logo2.png";
const { Content } = Layout;
const { Text, Title } = Typography;

class Invite extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.state = {};
  }

  routeChange() {
    let path = `/makegroup`;
    this.props.history.push(path);
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh", background: "white" }}>
        <Content style={{ margin: "0 16px" }}>
          <Title
            level={3}
            style={{ textAlign: "center", margin: "19vh 0 6vh 0" }}
          >
            회원가입 완료
          </Title>
          <img
            src={logoImage}
            alt="logo"
            style={{
              margin: "0 0px 8vh 14vh"
            }}
          />
          <br />
          <div style={{ textAlign: "center" }}>
            <Text style={{ fontSize: "large" }}>즐겁게 도전하라!</Text>
            <br />
            <Text strong style={{ fontSize: "large" }}>
              가족들과 함께하는 추억만들기
            </Text>
          </div>
          <br />
          <br />
          <br />
          <Button
            type="danger"
            shape="round"
            style={{
              textAlign: "center",
              padding: "1ch 0 5vh 0",
              fontWeight: "bold"
            }}
            size="large"
            onClick={this.routeChange}
            block
          >
            메인 페이지로 이동
          </Button>
        </Content>
      </Layout>
    );
  }
}

export default Invite;
