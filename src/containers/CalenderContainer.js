import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Calendar from "../components/Calendar";
import CalendarModal from "../components/CalendarModal";
import * as calendarActions from "../store/modules/calendar";

import moment from "moment";

//자신의 id props 필요

const userInfo = {
  id: 1,
  name: "나",
  color: "yellow"
};
class CalenderContainer extends Component {
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
    const { CalendarActions } = this.props;
    CalendarActions.selectChallengeDates(date);
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
      selectDate
    } = this.props;

    return (
      <Fragment>
        <CalendarModal
          selectDate={selectDate}
          visible={visible}
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
        />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({
  dates: calendar.dates,
  challengeDates: calendar.challengeDates,
  today: calendar.today,
  visible: calendar.visible,
  toggle: calendar.toggle,
  selectDate: calendar.selectDate
});

const mapDispatchProps = dispatch => ({
  CalendarActions: bindActionCreators(calendarActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(CalenderContainer);
