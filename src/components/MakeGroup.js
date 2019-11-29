import React from "react";
import { Layout, Typography, Button, Input, Card } from "antd";
import plusImage from "../images/Vector.png";
import PropTypes from "prop-types";

const { Content } = Layout;
const { Text } = Typography;

function MakeGroup({ text, onChange, onOpenMakeGroup, onOpenJoinGroup }) {
  const disable = text.length !== 0 ? false : true;
  return (
    <>
      <Content style={{ margin: "3vh" }}>
        <Text strong style={{ margin: "1vh" }}>
          초대코드를 받으셨다면!
        </Text>
        <Card
          type="dashed"
          style={{ margin: "1vh 0 5vh 0", fontSize: "small" }}
        >
          <Text strong>그룹에 들어가기 위한 </Text>
          <Text strong type="danger">
            초대코드
          </Text>
          <Text strong>를 입력해주세요.</Text>
          <Input
            size="large"
            name="code"
            value={text}
            onChange={onChange}
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
            disabled={disable}
            size="large"
            type="danger"
            shape="round"
            block
            style={{ margin: "3vh 0" }}
            onClick={onOpenJoinGroup}
          >
            확인
          </Button>
        </Card>
        <Text strong style={{ margin: "1vh" }}>
          아직 그룹이 만들어지지 않았다면!
        </Text>
        <Card
          type="dashed"
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
            onClick={onOpenMakeGroup}
            src={plusImage}
            alt="plusImage"
            style={{
              margin: "3vh 18vh"
            }}
          />
        </Card>
      </Content>
    </>
  );
}

MakeGroup.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onOpenMakeGroup: PropTypes.func.isRequired,
  onOpenJoinGroup: PropTypes.func.isRequired
};

export default MakeGroup;
