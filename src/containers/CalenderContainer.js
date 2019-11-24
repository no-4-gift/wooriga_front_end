import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";
import Calendar from "../components/Calendar";
import CalendarModal from "../components/CalendarModal";
import * as calendarActions from "../store/modules/calendar";
import * as familyActions from "../store/modules/family";
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

const familyId = "wooriga";
const userId = 1615409;

const MyAlert = styled(Alert)`
  position: relative;
  top: -80vh;
  z-index: 100;
`;

class CalenderContainer extends Component {
  maxChallengeDateLength = 10;

  componentDidMount() {
    const { CalendarActions, FamilyActions, today } = this.props;
    const year = today.format("YYYY");
    const month = today.format("MM");
    console.log(month);
    CalendarActions.getCalendarData(familyId, year, month);
    FamilyActions.getFamilyData(familyId);
  }

  handleNextMonth = () => {
    const { CalendarActions, today } = this.props;
    const year = today
      .clone()
      .add(1, "month")
      .format("YYYY");
    const month = today
      .clone()
      .add(1, "month")
      .format("MM");
    console.log(month);
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

  handleSwipe = event => {
    const direction = event.direction;
    if (direction === 2) {
      console.log("swipe Left!");

      this.handleNextMonth();
    }
    if (direction === 4) {
      console.log("swipe Right!");

      this.handlePreMonth();
    }
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
    const { CalendarActions, members } = this.props;
    const userInfo = members.filter(elem => elem.uid === userId)[0];
    const newObj = {
      ...userInfo,
      date: date
    };
    this.handleCloseModal();
    CalendarActions.insertSchedule(newObj);
  };

  handleDeleteSchedule = date => {
    const { CalendarActions, members } = this.props;
    const userInfo = members.filter(elem => elem.uid === userId)[0];
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
    const { CalendarActions, challengeDates } = this.props;
    const cur = moment();
    this.handleToggle();
    CalendarActions.goToChallenge(cur);

    const queryDates = [];
    for (let i = 0; i < this.maxChallengeDateLength; i++) queryDates[i] = "";
    challengeDates.sort();
    for (let i = 0; i < challengeDates.length; i++)
      queryDates[i] = challengeDates[i];
    let queryString = "";
    for (let i = 0; i < this.maxChallengeDateLength; i++) {
      queryString += `date${i + 1}=${queryDates[i]}`;
      if (i !== this.maxChallengeDateLength - 1) queryString += "&";
    }
    this.props.history.push(`/challenge_regist?${queryString}`);
  };

  render() {
    const {
      calendarLoading,
      calendarError,
      challengeBarInfo,
      dates,
      challengeDates,
      today,
      visible,
      toggle,
      selectDate,
      alert,
      familyLoading,
      members,
      familyError
    } = this.props;
    //const id = parseInt(window.sessionStorage.getItem("id")); //로그인 한 유저 정보는 store 나 localStorage에 저장 되어있어야함
    const disable = challengeDates.length > 0 ? false : true;
    console.log(disable);
    //console.log(`id is ${id}`);
    const challengeAcitveDates =
      challengeBarInfo.length > 0
        ? challengeBarInfo.map(elem => elem.date)
        : [];
    console.log(challengeAcitveDates);
    if (true) {
      if (calendarError || familyError) {
        return <div>Error!!!</div>;
      } else if (calendarLoading === true || familyLoading === true) {
        return <div>Loading....</div>;
      } else {
        return (
          <Fragment>
            <CalendarModal
              id={userId}
              challengeBarInfo={challengeBarInfo}
              members={members}
              selectDate={selectDate}
              visible={visible}
              dates={dates}
              onCancle={this.handleCloseModal}
              onDelete={this.handleDeleteSchedule}
              onInsert={this.handleInsertSchedule}
            />
            <Calendar
              dates={dates}
              members={members}
              userId={userId}
              today={today}
              toggle={toggle}
              challengeDates={challengeDates}
              onClickDate={this.handleSelectDate}
              onToggle={this.handleToggle}
              onPreMonth={this.handlePreMonth}
              onNextMonth={this.handleNextMonth}
              onTodayMonth={this.handleGoTodayMonth}
              onSwipe={this.handleSwipe}
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
      }
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = ({ calendar, login, family }) => ({
  calendarLoading: calendar.loading,
  calendarError: calendar.error,
  challengeBarInfo: calendar.challengeBarInfo,
  dates: calendar.dates,
  challengeDates: calendar.challengeDates,
  today: calendar.today,
  visible: calendar.visible,
  toggle: calendar.toggle,
  selectDate: calendar.selectDate,
  alert: calendar.alert,
  logged: login.logged,
  familyLoading: family.loading,
  members: family.members,
  familyError: family.error
});

const mapDispatchProps = dispatch => ({
  CalendarActions: bindActionCreators(calendarActions, dispatch),
  FamilyActions: bindActionCreators(familyActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchProps)(CalenderContainer);
