import React from "react";
import "./ShowCalendar.scss";
import {
  MdChevronLeft,
  MdChevronRight,
  MdFastForward,
  MdFastRewind
} from "react-icons/md";
import PropTypes from "prop-types";
import { Button } from "antd";
import Palette from "./Palette";
function ShowCalender({
  onSelectDate,
  selected,
  dates,
  today,
  onNextMonth,
  onPreMonth,
  onNextYear,
  onPreYear,
  onToggle
}) {
  function generate(today, onSelectDate, selected, dates) {
    console.log(today.format("YYYY-MM-DD"));
    const startWeek = today
      .clone()
      .startOf("month")
      .week();

    console.log(`startWeek: ${startWeek}`);
    const endWeek =
      today
        .clone()
        .endOf("month")
        .week() === 1
        ? 53
        : today
            .clone()
            .endOf("month")
            .week();
    let calendar = [];

    const test = today
      .clone()
      .endOf("month")
      .week();

    console.log(`current ${today.clone().week(startWeek)}`);
    console.log(`endOf month: ${today.clone().endOf("month")}`);
    console.log(`endWeek : ${test}`);
    console.log(`this years endweeks: ${today.clone().week(53)}`);
    let curToday = today.clone();
    for (let weight = 0; weight < 6; weight++) {
      let week = startWeek + weight;
      console.log(week);
      if (week > 53) {
        week = 2;
        console.log(week);
        curToday = today.clone().add(1, "year");
        console.log(curToday);
      }
      calendar.push(
        <div className="row" key={week}>
          {Array(7)
            .fill(0)
            // eslint-disable-next-line no-loop-func
            .map((n, i) => {
              let current = curToday
                .clone()
                .week(week)
                .startOf("week")
                .add(n + i, "day");
              let thisDayMembers = dates.filter(
                elem => elem.date === current.format("YYYY-MM-DD")
              );

              let selCheck = selected.filter(
                elem => elem === current.format("YYYY-MM-DD")
              );
              let selKey = selCheck.length > 0 ? "selected" : "";

              let isGrayed =
                current.format("MM") === curToday.format("MM") ? "" : "grayed";
              return (
                <div
                  onClick={() => onSelectDate(current.format("YYYY-MM-DD"))}
                  className={`box ${isGrayed}`}
                  key={i}
                >
                  <span className={`text ${selKey}`}>
                    {current.format("D")}
                  </span>

                  <div className="member-container">
                    {thisDayMembers.map(elem => (
                      <div className={`circle ${elem.color}`}></div>
                    ))}
                  </div>
                </div>
              );
            })}
        </div>
      );
    }
    return calendar;
  }
  return (
    <div id="calendar" className="CalendarWrapper">
      <Palette />
      <div className="show-calendar">
        <div className="head">
          <button onClick={onPreYear}>
            <MdFastRewind />
          </button>
          <button onClick={onPreMonth}>
            <MdChevronLeft />
          </button>
          <span className="title">{today.format("MM월")}</span>
          <button onClick={onNextMonth}>
            <MdChevronRight />
          </button>
          <button onClick={onNextYear}>
            <MdFastForward />
          </button>
        </div>
        <div className="body">
          <div className="row">
            <div className="box">
              <span className="text">SUN</span>
            </div>
            <div className="box">
              <span className="text">MON</span>
            </div>
            <div className="box">
              <span className="text">TUE</span>
            </div>
            <div className="box">
              <span className="text">WED</span>
            </div>
            <div className="box">
              <span className="text">THU</span>
            </div>
            <div className="box">
              <span className="text">FRI</span>
            </div>
            <div className="box">
              <span className="text">SAT</span>
            </div>
          </div>

          {generate(today, onSelectDate, selected, dates)}
        </div>
      </div>
      <div>
        <Button onClick={onToggle} type="primary" block>
          편집 하기
        </Button>
        <Button type="danger" block style={{ margin: "1rem 0 0 0" }}>
          챌린지 하기
        </Button>
        <ul>
          {selected.map(elem => (
            <li>{elem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShowCalender;

ShowCalender.propTypes = {
  today: PropTypes.object.isRequired,
  onSelectDate: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  dates: PropTypes.array.isRequired,
  onNextMonth: PropTypes.func.isRequired,
  onPreMonth: PropTypes.func.isRequired,
  onNextYear: PropTypes.func.isRequired,
  onPreYear: PropTypes.func.isRequired
};
