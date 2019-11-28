import axios from "axios";

export const getChallenger = async (familyId, userId) => {
  const response = await axios.get(`http://52.78.149.82:8081/api/familyId/uid?familyId=${familyId}&uid=${userId}`);

  return response.data;
};

export const postFamilyRegist = async (
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