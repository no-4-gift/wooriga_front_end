import axios from "axios";

export const getChallenger = async (familyId, userId) => {
  const response = await axios.get(`http://52.78.149.82:8081/api/familyId/uid?familyId=${familyId}&uid=${userId}`);

  return response.data;
};

export const getParticipation = async (familyId, userId) => {
    const response = await axios.get(`http://52.78.149.82:8081/api/familyId/uid/bool?familyId=${familyId}&uid=${userId}`);

    return response.data;
};
  