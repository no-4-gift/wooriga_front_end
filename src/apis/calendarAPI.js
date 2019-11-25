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
  const emptyDay = {
    emptydate: date,
    familyId: familyId,
    userIdFk: uid
  };
  const params = JSON.stringify(emptyDay);

  const response = await axios.post(
    "http://52.78.149.82:8081/api/uid/date",
    params,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response;
};

export const deleteEmptySchedule = async (uid, date, familyId) => {
  const emptyDay = {
    emptydate: date,
    familyId: familyId,
    userIdFk: uid
  };
  const params = JSON.stringify(emptyDay);
  console.log(params);

  const response = axios.delete(
    "http://52.78.149.82:8081/api/uid/date",

    {
      headers: {
        "Content-Type": "application/json"
      },
      data: params
    }
  );

  return response;
};
