import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import EditCalendar from "../components/EditCalendar";
import ShowCalendar from "../components/ShowCalendar";
import * as calendarActions from "../store/modules/calendar";
import { Spin } from "antd";

const apiGetDataes1 = [
  {
    id: 1,
    name: "아빠",
    date: "2019-09-11",
    color: "red"
  },
  {
    id: 2,
    name: "엄마",
    date: "2019-09-11",
    color: "blue"
  },
  {
    id: 3,
    name: "형",
    date: "2019-09-11",
    color: "green"
  },
  {
    id: 4,
    name: "나",
    date: "2019-09-11",
    color: "yellow"
  },
  {
    id: 5,
    name: "동생",
    date: "2019-09-11",
    color: "pink"
  },
  {
    id: 1,
    name: "아빠",
    date: "2019-09-12",
    color: "red"
  },
  {
    id: 2,
    name: "엄마",
    date: "2019-09-12",
    color: "blue"
  },
  {
    id: 4,
    name: "나",
    date: "2019-09-13",
    color: "yellow"
  },
  {
    id: 3,
    name: "형",
    date: "2019-09-14",
    color: "green"
  },
  {
    id: 4,
    name: "나",
    date: "2019-09-14",
    color: "yellow"
  },
  {
    id: 5,
    name: "동생",
    date: "2019-09-14",
    color: "pink"
  }
];

const apiGetData2 = ["2020-09-11", "2020-09-12", "2020-09-13", "2020-09-14"]; // 이번년

//자신의 id props 필요
class CalenderContainer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("should!");
    return true;
  }

  getCurrentYearData = data => {
    const { CalendarActions } = this.props;
    CalendarActions.changeDates(data);
    CalendarActions.isLoading(false);
  };

  componentDidMount() {
    setTimeout(() => this.getCurrentYearData(apiGetDataes1), 3000); // api 호출 테스트
  }

  //Edit 달력에서 날짜 선택
  handleSelectDate = date => {
    const { CalendarActions, mydates } = this.props;
    const orignLength = mydates.length;
    console.log(mydates);
    console.log(orignLength);
    const next = mydates.filter(elem => elem.date !== date);
    console.log(next);
    if (next.length === orignLength) {
      next.push({
        ...mydates[0],
        date: date
      });
      CalendarActions.selectDate(next);
    } else {
      CalendarActions.selectDate(next);
    }
  };

  postEditData = async () => {};

  //편집 한 내용 제출
  handleSubmit = () => {
    const { dates, mydates } = this.props;
    const orignMydates = dates.filter(elem => elem.id === 4);
    let deleted = [];
    for (var i = 0; i < orignMydates.length; i++) {
      if (
        mydates.findIndex(elem => elem.date === orignMydates[i].date) === -1
      ) {
        deleted.push(orignMydates[i]);
      }
    }
    let inserted = [];
    for (var i = 0; i < mydates.length; i++) {
      if (
        orignMydates.findIndex(elem => elem.date === mydates[i].date) === -1
      ) {
        inserted.push(mydates[i]);
      }
    }

    console.log(deleted);
    console.log(inserted);
  };

  //다음 달로 이동
  handleNextMonth = () => {
    console.log("click next month!");
    const { CalendarActions, today } = this.props;

    const nextMonth = today.clone().add(1, "months");
    CalendarActions.changeToday(nextMonth);
  };

  //저번 달로 이동
  handlePreMonth = () => {
    const { CalendarActions, today } = this.props;
    const nextMonth = today.clone().add(-1, "month");
    CalendarActions.changeToday(nextMonth);
  };

  //내년으로 이동
  handleNextYear = () => {
    const { CalendarActions, today } = this.props;
    const nextYear = today.clone().add(1, "year");
    CalendarActions.changeToday(nextYear);
  };

  //작년 으로 이동
  handlePreYear = () => {
    const { CalendarActions, today } = this.props;
    const nextYear = today.clone().add(-1, "year");
    CalendarActions.changeToday(nextYear);
  };

  //챌린지 신청 버튼
  handleChallenge = date => {};

  //챌린지 날짜 선택
  handleSelectChallenge = selectDay => {
    const { CalendarActions, selectedDates, dates } = this.props;
    const orignLength = selectedDates.length;
    console.log(selectDay);
    const check = dates.filter(elem => elem.date === selectDay);
    if (check.length > 0) {
      if (orignLength === 0) {
        const init = [];
        init.push(selectDay);
        console.log(init);
        CalendarActions.selectDay(init);
      } else {
        const next = selectedDates.filter(elem => elem !== selectDay);
        console.log(next);
        if (next.length === orignLength) {
          next.push(selectDay);
          CalendarActions.selectDay(next);
        } else {
          CalendarActions.selectDay(next);
        }
      }
    }
  };

  //모달 확인 버튼
  handleConfirm = () => {
    const { CalendarActions, isVisible } = this.props;
    CalendarActions.isVisible(!isVisible);
  };

  //달력 전환 버튼
  handleToggle = () => {
    const { CalendarActions, toggle, dates } = this.props;
    if (!toggle) {
      const mySelected = dates.filter(elem => elem.id === 4); //자신의 아이디(store에 id가 있어야함)만 선택한 날짜
      CalendarActions.selectDate(mySelected);

      CalendarActions.selectDay([]);
    }

    CalendarActions.onToggle(!toggle);
  };

  render() {
    const {
      dates,
      mydates,
      today,
      isLoading,
      toggle,
      selectedDates
    } = this.props;

    return (
      <>
        <Spin spinning={isLoading} tip="Loading...">
          {!toggle ? (
            <ShowCalendar
              onSelectDate={this.handleSelectChallenge}
              onNextMonth={this.handleNextMonth}
              onPreMonth={this.handlePreMonth}
              onNextYear={this.handleNextYear}
              onPreYear={this.handlePreYear}
              selected={selectedDates}
              dates={dates}
              today={today}
              onToggle={this.handleToggle}
            />
          ) : (
            <EditCalendar
              onSelectDate={this.handleSelectDate}
              onNextMonth={this.handleNextMonth}
              onPreMonth={this.handlePreMonth}
              onNextYear={this.handleNextYear}
              onPreYear={this.handlePreYear}
              onSubmit={this.handleSubmit}
              selected={mydates}
              today={today}
              onToggle={this.handleToggle}
            />
          )}
        </Spin>
      </>
    );
  }
}

const mapStateToProps = ({ calendar }) => ({
  dates: calendar.dates,
  mydates: calendar.mydates,
  selectedDates: calendar.selectedDates,
  today: calendar.today,
  isLoading: calendar.isLoading,
  toggle: calendar.toggle
});

const mapDispatchProps = dispatch => ({
  CalendarActions: bindActionCreators(calendarActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchProps
)(CalenderContainer);
