import React, { Component } from "react";
import { Layout, Typography, Button, Input, Card } from "antd";
import plusImage from "../images/Vector.png";
const { Header, Content } = Layout;
const { Text } = Typography;

class MakeGroup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <Layout style={{ minHeight: "100vh", background: "white" }}>
        <Header style={{ padding: "8vh" }}></Header>
        <Content style={{ margin: "3vh" }}>
          <Text strong style={{ margin: "1vh" }}>
            초대코드를 받으셨다면!
          </Text>
          <Card
            type="dashed"
            block
            style={{ margin: "1vh 0 5vh 0", fontSize: "small" }}
          >
            <Text strong>그룹에 들어가기 위한 </Text>
            <Text strong type="danger">
              초대코드
            </Text>
            <Text strong>를 입력해주세요.</Text>
            <Input
              size="large"
              placeholder="초대코드 입력"
              style={{
                margin: "5vh 0px 2vh 0",
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                borderBottomColor: "black",
                borderBottomWidth: "medium",
                borderBottomLeftRadius: "inherit",
                borderBottomRightRadius: "inherit"
              }}
            />

            <Button
              size="large"
              type="danger"
              shape="round"
              block
              style={{ margin: "3vh 0" }}
            >
              확인
            </Button>
          </Card>
          <Text strong style={{ margin: "1vh" }}>
            아직 그룹이 만들어지지 않았다면!
          </Text>
          <Card
            type="dashed"
            block
            style={{
              padding: "1vh 1vh 2vh 1vh",
              margin: "1vh 0 0 0",
              fontSize: "small"
            }}
          >
            <Text strong>관리자가 되어 </Text>
            <Text strong type="danger">
              그룹
            </Text>
            <Text strong>을 만들래요!</Text>
            <br />
            <br />
            <img
              src={plusImage}
              alt="plusImage"
              style={{
                margin: "3vh 18vh"
              }}
            />
          </Card>
        </Content>
      </Layout>
    );
  }
}

export default MakeGroup;
