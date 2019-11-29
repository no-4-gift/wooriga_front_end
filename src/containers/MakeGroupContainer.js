import React, { Component, Fragment } from "react";
import MakeGroup from "../components/MakeGroup";
import MakeGroupModal from "../components/MakeGroupModal";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as makeGroupActions from "../store/modules/makeGroup";
import { Redirect, withRouter } from "react-router-dom";

class MakeGroupContainer extends Component {
  handleOpenMakeGroup = () => {
    const { MakeGroupActions } = this.props;
    MakeGroupActions.openMakeGroup();
  };
  handleOpenJoinGroup = () => {
    const { MakeGroupActions } = this.props;
    MakeGroupActions.openJoinGroup();
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
  handleSubmit = e => {
    console.log("Submit!!");
  };

  handleSelectColor = color => {
    const { MakeGroupActions } = this.props;
    MakeGroupActions.selectColor(color);
  };
  render() {
    const { toggle, modalKind, input, color } = this.props;
    const { relationShip, code } = input;
    return (
      <Fragment>
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
        />
        <MakeGroup
          text={code}
          onOpenJoinGroup={this.handleOpenJoinGroup}
          onChange={this.handleChangeCode}
          onOpenMakeGroup={this.handleOpenMakeGroup}
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ makeGroup }) => ({
  toggle: makeGroup.toggle,
  modalKind: makeGroup.modalKind,
  input: makeGroup.input,
  color: makeGroup.color
});

const mapDispatchToProps = dispatch => ({
  MakeGroupActions: bindActionCreators(makeGroupActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MakeGroupContainer));
