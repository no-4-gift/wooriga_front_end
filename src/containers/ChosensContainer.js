import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Chosens from "../components/statics/ChosensLayout";
import * as staticsActions from "../store/modules/statics";
import { Redirect } from "react-router-dom";
import { Spin, Alert } from "antd";
import styled from "styled-components";

const LoadingLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
`;

class ChosensContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uid: parseInt(sessionStorage.getItem("uid"))
    };
  }

  componentDidMount() {
    const { StaticsActions } = this.props;

    if (this.state.uid) {
      StaticsActions.getFamilyId(this.state.uid);
    }
  }
  componentWillUnmount() {
    const { StaticsActions } = this.props;
    StaticsActions.onMaskGroup();
  }
  calendar = () => {
    const { StaticsActions } = this.props;
    StaticsActions.onCalendar();
  };

  maskGroup = () => {
    const { StaticsActions } = this.props;
    StaticsActions.onMaskGroup();
  };

  contact = () => {
    const { StaticsActions } = this.props;
    StaticsActions.onContact();
  };

  render() {
    const { checked, loading, data, error } = this.props;
    //const uid = sessionStorage.getItem("uid");
    const uid = this.state.uid;

    if (uid) {
      if (loading) {
        return (
          <Spin tip="Loading...">
            <LoadingLayout />
          </Spin>
        );
      } else if (error) {
        return (
          <LoadingLayout>
            <Alert
              message="Error"
              description="데이터 조회 실패 새로 고침해주세요."
              type="error"
              showIcon
            />
          </LoadingLayout>
        );
      } else {
        return (
          <Fragment>
            <Chosens
              calendar={this.calendar}
              maskGroup={this.maskGroup}
              contact={this.contact}
              checked={checked}
              data={data}
            />
          </Fragment>
        );
      }
    } else {
      return (<Redirect to="/login" />);
    }
  }
}
const mapStateToProps = ({ statics }) => ({
  checked: statics.checked,
  loading: statics.loading,
  data: statics.data,
  error: statics.error
});

const mapDispatchProps = dispatch => ({
  StaticsActions: bindActionCreators(staticsActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(ChosensContainer);
