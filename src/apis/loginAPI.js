import axios from "axios";

export const kakaoLoginAPI = async (id, nickname, profile) => {
  const body = JSON.stringify({
    id: id,
    nickname: nickname,
    profile: profile
  });
  console.log(body);
  const response = await axios.post(
    "http://52.78.149.82:8081/api/social/login/kakao",
    body,
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
  console.log(response.data);
  return response.data;
};
