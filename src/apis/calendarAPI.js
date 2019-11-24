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
  console.log(response.data);
  return response.data;
};
