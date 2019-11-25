import axios from "axios";

export const getCalendarData = async (familyId, year, month) => {
  const response = await axios.get(
    "http://52.78.149.82:8081/api/familyId/year/month",
    {
      params: {
        familyId: familyId,
        year: year,
        month: month
      }
    }
  );

  //console.log(response.data);
  return response.data;
};

export const postEmptySchedule = async (uid, date, familyId) => {
  const response = await axios.post("http://52.78.149.82:8081/api/uid/date", {
    params: {
      userIdFk: uid,
      emptydate: date,
      familyId: familyId
    }
  });

  return response;
};
