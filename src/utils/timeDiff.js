import moment from "moment";

function timeDiff(date) {
  const today = moment();
  const curDate = moment(date, "YYYY-MM-DD");

  const diff = moment.duration(today.diff(curDate)).asDays();

  return diff <= 0 ? true : false;
}

export default timeDiff;
