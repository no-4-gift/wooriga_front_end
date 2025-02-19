/* eslint-disable no-unused-vars */
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";
import Calendar from "../components/Calendar";
import CalendarModal from "../components/CalendarModal";
import * as calendarActions from "../store/modules/calendar";
import family, * as familyActions from "../store/modules/family";
import * as challengeAddActions from "../store/modules/challengeAdd";
import { Alert } from "antd";
import moment from "moment";
import styled from "styled-components";
import { Spin } from "antd";
import timeDiff from "../utils/timeDiff";

//현재 컴포넌트에서 필수적으로 가져야할 Props

const MyAlert = styled(Alert)`
  position: relative;
  top: -80vh;
  z-index: 100;
`;

class CalenderContainer extends Component {
  maxChallengeDateLength = 10;
  constructor(props) {
    super(props);
    this.state = {
      uid: parseInt(sessionStorage.getItem("uid")),
      familyId: sessionStorage.getItem("familyId")
    };
  }

  componentDidMount() {
    const { CalendarActions, FamilyActions, today } = this.props;
    const year = today.format("YYYY");
    const month = today.format("MM");
    const cur = moment();
    
    
    CalendarActions.getCalendarData(this.state.familyId, year, month);
    CalendarActions.addViewedDays(today.format("YYYY-MM"));
    FamilyActions.getFamilyData(this.state.familyId);
    
    //CalendarActions.goCurMonth(cur);
  }
  componentWillUnmount() {
    const { CalendarActions } = this.props;
    CalendarActions.initCalendar();
  }

  handleNextMonth = () => {
    const { CalendarActions, today, viewedDay } = this.props;
    const next = today.clone().add(1, "month");
    const year = next.format("YYYY");
    const month = next.format("MM");
    console.log(next.format("YYYY-MM"));

    if (viewedDay.findIndex(date => date === next.format("YYYY-MM")) === -1) {
      CalendarActions.getCalendarData(this.state.familyId, year, month);
      CalendarActions.addViewedDays(next.format("YYYY-MM"));
    }

    CalendarActions.goNextMonth();
  };
  handlePreMonth = () => {
    const { CalendarActions, today, viewedDay } = this.props;
    const next = today.clone().add(-1, "month");
    const year = next.format("YYYY");
    const month = next.format("MM");
    console.log(next.format("YYYY-MM"));

    if (viewedDay.findIndex(date => date === next.format("YYYY-MM")) === -1) {
      CalendarActions.getCalendarData(this.state.familyId, year, month);
      CalendarActions.addViewedDays(next.format("YYYY-MM"));
    }
    CalendarActions.goPreMonth();
  };
  handleGoTodayMonth = () => {
    const { CalendarActions, viewedDay } = this.props;
    const cur = moment();
    const year = cur.format("YYYY");
    const month = cur.format("MM");
    console.log(cur.format("YYYY-MM"));

    /*if (viewedDay.findIndex(date => date === cur.format("YYYY-MM")) === -1) {
      CalendarActions.getCalendarData(familyId, year, month);
      CalendarActions.addViewedDays(cur.format("YYYY-MM"));
    }*/
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
    const userInfo = members.filter(elem => elem.uid === this.state.uid)[0];
    const newObj = {
      emptyDate: date,
      userInfo
    };

    CalendarActions.postEmptyDate(
      this.state.uid,
      date,
      this.state.familyId,
      newObj
    );
  };

  handleDeleteSchedule = date => {
    const { CalendarActions, members } = this.props;
    const userInfo = members.filter(elem => elem.uid === this.state.uid)[0];
    const newObj = {
      emptyDate: date,
      userInfo
    };

    CalendarActions.deleteEmptyDate(
      this.state.uid,
      date,
      this.state.familyId,
      newObj
    );
  };

  handleToggle = () => {
    const { CalendarActions } = this.props;
    CalendarActions.toggle();
  };

  handleSelectChallengeDates = date => {
    const { CalendarActions, dates, challengeDates } = this.props;
    if (timeDiff(date)) {
      if (dates.findIndex(elem => elem.emptyDate === date) !== -1) {
        CalendarActions.selectChallengeDates(date);
        if (challengeDates.findIndex(elem => elem === date) !== -1)
          return CalendarActions.alert(false);
        if (challengeDates.length >= this.maxChallengeDateLength)
          CalendarActions.alert(true);
      }
    }
  };

  handleCloseAlert = () => {
    const { CalendarActions } = this.props;
    CalendarActions.alert(false);
  };

  handleCloseEditErrorAlert = () => {
    const { CalendarActions } = this.props;
    CalendarActions.closeEditErrorAlert();
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
    const { ChallengeAddActions, challengeDates } = this.props;

    this.handleToggle();

    ChallengeAddActions.postDateListAndPath(
      this.state.familyId,
      challengeDates,
      this.props.history
    );
  };

  handleGoChallengeDetail = (registId, registerUid) => {
    if (this.state.uid === registerUid) {
      const { challenger_challenges } = this.props;
      this.props.history.push(`/mychallenge_detail/${registId}`, {
        flag: "main",
        challenger_challenges: challenger_challenges,
        uid: registerUid
      });
    } else {
      const { participation_challenges } = this.props;
      this.props.history.push(`/mychallenge_detail/${registId}`, {
        flag: "sub",
        participation_challenges: participation_challenges,
        uid: registerUid
      });
    }
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
      editDateError,
      familyLoading,
      members,
      familyError,
      challengeAddError,
      challengeLoading
    } = this.props;

    const disable = challengeDates.length > 0 ? false : true;

    let challengeAcitveDates = [];
    if (challengeBarInfo.length > 0) {
      const challengeDates = challengeBarInfo.map(elem => elem.date);
      for (let i = 0; i < challengeDates.length; i++)
        challengeAcitveDates = challengeAcitveDates.concat(challengeDates[i]);
    }

    if (familyError || calendarError) {
      return <div>Error!!!</div>;
    } else {
      return (
        <Fragment>
          <CalendarModal
            id={this.state.uid}
            challengeBarInfo={challengeBarInfo}
            selectDate={selectDate}
            visible={visible}
            dates={dates}
            onCancle={this.handleCloseModal}
            onDelete={this.handleDeleteSchedule}
            onInsert={this.handleInsertSchedule}
            onSelectChallenge={this.handleGoChallengeDetail}
          />
          <Spin
            tip="Loading..."
            spinning={calendarLoading || familyLoading || challengeLoading}
          >
            <Calendar
              dates={dates}
              members={members}
              userId={this.state.uid}
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
              challengeAcitveDates={challengeAcitveDates}
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
            {editDateError && (
              <MyAlert
                message="Error"
                description="일정 수정에 실패하였습니다."
                type="error"
                showIcon
                closable
                onClose={this.handleCloseEditErrorAlert}
              />
            )}
            {challengeAddError && (
              <MyAlert
                message="Error"
                description="해당 날짜에 모두 해당하는 인원이 없습니다."
                type="error"
                showIcon
                closable
              />
            )}
          </Spin>
        </Fragment>
      );
    }
  }
}

const mapStateToProps = ({
  calendar,

  family,
  challengeAdd,
  mychallenge
}) => ({
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
  viewedDay: calendar.viewedDay,
  editDateError: calendar.editDateError,
  familyLoading: family.loading,
  members: family.members,
  familyError: family.error,
  challengeAddError: challengeAdd.error,
  challengeLoading: challengeAdd.loading,
  challenger_challenges: mychallenge.challenger_challenges,
  participation_challenges: mychallenge.participation_challenges
});

const mapDispatchProps = dispatch => ({
  CalendarActions: bindActionCreators(calendarActions, dispatch),
  FamilyActions: bindActionCreators(familyActions, dispatch),
  ChallengeAddActions: bindActionCreators(challengeAddActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(withRouter(CalenderContainer));
