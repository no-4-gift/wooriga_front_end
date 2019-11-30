import React, { Component, Fragment } from "react";
import MakeGroup from "../components/MakeGroup";
import MakeGroupModal from "../components/MakeGroupModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as makeGroupActions from "../store/modules/makeGroup";
import { Redirect, withRouter } from "react-router-dom";
import { Spin, Alert } from "antd";

class MakeGroupContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: parseInt(sessionStorage.getItem("uid"))
    };
  }
  handleOpenMakeGroup = () => {
    const { MakeGroupActions } = this.props;
    MakeGroupActions.getMyInfo(this.state.uid);
  };
  handleOpenJoinGroup = () => {
    const {
      MakeGroupActions,
      input: { code }
    } = this.props;
    MakeGroupActions.getFamilyInfo(this.state.uid, code);
  };
  handleCloseModal = () => {
    const { MakeGroupActions } = this.props;
    MakeGroupActions.closeModal();
  };
  handleChangeRelationShip = e => {
    const { MakeGroupActions } = this.props;
    const { name, value } = e.target;
    if (value.length <= 5) MakeGroupActions.changeInput(name, value);
  };
  handleChangeCode = e => {
    const { MakeGroupActions } = this.props;
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    MakeGroupActions.changeInput(name, value);
  };
  handleSubmit = () => {
    const { MakeGroupActions, input, color, modalKind } = this.props;
    const { relationShip, code } = input;
    if (modalKind === 1) {
      MakeGroupActions.createGroup(
        this.state.uid,
        color,
        relationShip,
        this.props.history
      );
    } else {
      MakeGroupActions.joinGroup(
        this.state.uid,
        color,
        relationShip,
        code,
        this.props.history
      );
    }
  };

  handleSelectColor = color => {
    const { MakeGroupActions } = this.props;
    MakeGroupActions.selectColor(color);
  };
  render() {
    const {
      toggle,
      modalKind,
      input,
      color,
      loading,
      data,
      error
    } = this.props;
    const { relationShip, code } = input;

    return (
      <Fragment>
        {error && (
          <Alert
            message="Error"
            description="데이터 조회 실패하였습니다."
            type="error"
            showIcon
            closable
          />
        )}
        <Spin tip="Loading..." spinning={loading} size="large">
          {data && (
            <MakeGroupModal
              toggle={toggle}
              title={modalKind === 1 ? "그룹 생성" : "그룹 확인"}
              text={relationShip}
              code={code}
              kind={modalKind}
              color={color}
              onChange={this.handleChangeRelationShip}
              onCancle={this.handleCloseModal}
              onSubmit={this.handleSubmit}
              onSelectColor={this.handleSelectColor}
              data={data}
            />
          )}
          <MakeGroup
            text={code}
            onOpenJoinGroup={this.handleOpenJoinGroup}
            onChange={this.handleChangeCode}
            onOpenMakeGroup={this.handleOpenMakeGroup}
          />
        </Spin>
      </Fragment>
    );
  }
}

const mapStateToProps = ({ makeGroup }) => ({
  toggle: makeGroup.toggle,
  modalKind: makeGroup.modalKind,
  input: makeGroup.input,
  color: makeGroup.color,
  loading: makeGroup.loading,
  data: makeGroup.data,
  error: makeGroup.error
});

const mapDispatchToProps = dispatch => ({
  MakeGroupActions: bindActionCreators(makeGroupActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MakeGroupContainer));
