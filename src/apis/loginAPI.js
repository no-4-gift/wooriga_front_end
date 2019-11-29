import axios from "axios";

export const kakaoLoginAPI = async access_token => {
  const response = await axios.get(
    "http://52.78.149.82:8081/api/social/login/kakao",
    {
      params: {
        accessToken: access_token
      }
    }
  );
  console.log(response.data);
  return response.data;
};
