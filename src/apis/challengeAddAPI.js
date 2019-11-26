import axios from "axios";

export const postChallengeDateList = async (familyId, dates) => {
  const data = JSON.stringify({
    familyId: familyId,
    date: dates
  });
  const response = await axios.post(
    "http://52.78.149.82:8081/api/familyId/dateList",
    data,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data;
};

export const postChallengeRegist = async (
  participatntFK,
  challengeIdFK,
  chiefIdFK,
  familyId,
  resolution,
  registeredDate
) => {
  const body = JSON.stringify({
    participantFK: participatntFK,
    challengeIdFK: challengeIdFK,
    chiefIdFK: chiefIdFK,
    familyId: familyId,
    resolution: resolution,
    registeredDate: registeredDate
  });
  console.log(body);
  const response = await axios.post(
    "http://52.78.149.82:8081/api/uid/date/cid",
    body,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  return response.data;
};
