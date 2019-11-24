import axios from "axios";
//가족 구성원 정보 가져오는 API 호출

export const getFamily = async familyId => {
  const response = await axios.get(
    `http://52.78.149.82:8081/api/familyId/?familyId=${familyId}`
  );
  console.log(response.data);
  return response.data;
};
