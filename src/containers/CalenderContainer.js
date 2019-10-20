import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Calendar from "../components/Calendar";
import CalendarModal from "../components/CalendarModal";
import * as calendarActions from "../store/modules/calendar";
import { Alert } from "antd";
import moment from "moment";
import styled from "styled-components";

//자신의 id props 필요

const userInfo = {
  id: 4,
  name: "데드 샷",
  relation: "나",
  color: "yellow"
};

const MyAlert = styled(Alert)`
  position: relative;
  top: -80vh;
  z-index: 100;
`;

class CalenderContainer extends Component {
  maxChallengeDateLength = 10;
  handleNextMonth = () => {
    const { CalendarActions } = this.props;
    CalendarActions.goNextMonth();
  };
  handlePreMonth = () => {
    const { CalendarActions } = this.props;
    CalendarActions.goPreMonth();
  };
  handleGoTodayMonth = () => {
    const { CalendarActions } = this.props;
    const cur = moment();
    CalendarActions.goCurMonth(cur);
  };

  handleShowModal = date => {
    const { CalendarActions } = this.props;
    CalendarActions.openModal(date);
  };

  handleCloseModal = () => {
    const { CalendarActions } = this.props;
    CalendarActions.closeModal();
  };

  handleInsertSchedule = date => {
    const { CalendarActions } = this.props;
    const newObj = {
      ...userInfo,
      date: date
    };
    this.handleCloseModal();
    CalendarActions.insertSchedule(newObj);
  };

  handleDeleteSchedule = date => {
    const { CalendarActions } = this.props;
    const newObj = {
      ...userInfo,
      date: date
    };
    this.handleCloseModal();
    CalendarActions.deleteSchedule(newObj);
  };

  handleToggle = () => {
    const { CalendarActions } = this.props;
    CalendarActions.toggle();
  };

  handleSelectChallengeDates = date => {
    const { CalendarActions, dates, challengeDates } = this.props;
    if (dates.findIndex(elem => elem.date === date) !== -1) {
      CalendarActions.selectChallengeDates(date);
      if (challengeDates.findIndex(elem => elem === date) !== -1)
        return CalendarActions.alert(false);
      if (challengeDates.length >= this.maxChallengeDateLength)
        CalendarActions.alert(true);
    }
  };

  handleCloseAlert = () => {
    const { CalendarActions } = this.props;
    CalendarActions.alert(false);
  };
  handleSelectDate = date => {
    console.log("날짜 선택");
    const { toggle } = this.props;
    if (toggle === false) {
      this.handleShowModal(date);
    } else {
      this.handleSelectChallengeDates(date);
    }
  };

  handleGoToChallenge = () => {
    const { CalendarActions } = this.props;
    const cur = moment();
    this.handleToggle();
    CalendarActions.goToChallenge(cur);
  };

  render() {
    const {
      dates,
      challengeDates,
      today,
      visible,
      toggle,
      selectDate,
      alert
    } = this.props;
    const id = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    const disable = challengeDates.length > 0 ? false : true;
    console.log(disable);
    console.log(`id is ${id}`);

    if (id) {
      return (
        <Fragment>
          <CalendarModal
            id={id}
            selectDate={selectDate}
            visible={visible}
            dates={dates}
            onCancle={this.handleCloseModal}
            onDelete={this.handleDeleteSchedule}
            onInsert={this.handleInsertSchedule}
          />
          <Calendar
            dates={dates}
            today={today}
            toggle={toggle}
            challengeDates={challengeDates}
            onClickDate={this.handleSelectDate}
            onToggle={this.handleToggle}
            onPreMonth={this.handlePreMonth}
            onNextMonth={this.handleNextMonth}
            onTodayMonth={this.handleGoTodayMonth}
            GoToChallenge={this.handleGoToChallenge}
            disable={disable}
          />
          {alert && (
            <MyAlert
              message="Informational Notes"
              description="챌린지 신청 일 수는 최대 10일 입니다."
              type="info"
              showIcon
              closable
              onClose={this.handleCloseAlert}
            />
          )}
        </Fragment>
      );
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = ({ calendar, login }) => ({
  dates: calendar.dates,
  challengeDates: calendar.challengeDates,
  today: calendar.today,
  visible: calendar.visible,
  toggle: calendar.toggle,
  selectDate: calendar.selectDate,
  alert: calendar.alert,
  logged: login.logged
});

const mapDispatchProps = dispatch => ({
  CalendarActions: bindActionCreators(calendarActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(CalenderContainer);
