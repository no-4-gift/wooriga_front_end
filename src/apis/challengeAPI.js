import axios from "axios";

// user Array에 첫번째 사람이 도전자! 

//도전중인 챌린지 정보 전달(현재 도전자)

export const getChallenger = async (familyId ,userId) => {
  const response = await axios.get(
    `http://52.78.149.82:8081/api/familyId/uid?familyId=${familyId}&uid=${userId}`
  );
  console.log(response.data);
  return response.data;
};


//함께하는 챌린지 정보 전달(현재 참여자)

export const getParticipation = async (familyId ,userId) => {
    const response = await axios.get(
      `http://52.78.149.82:8081/api/familyId/uid/bool?familyId=${familyId}&uid=${userId}`
    );
    console.log(response.data);
    return response.data;
};
  