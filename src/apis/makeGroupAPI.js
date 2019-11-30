import axios from "axios";

//그룹 코드 생성
export const createGroup = async uid => {
  console.log(uid);
  const response = await axios.get(`http://52.78.149.82:8081/api/admin`, {
    params: {
      uid: uid,
      accessToken: ""
    }
  });

  console.log(response);
  console.log("get FamilyId", response.data.familyId);
  console.log(response.data);
  return response.data;
};

//그룹 코드 에 들어가기
export const joinGroup = async (uid, familyId, color, relationShip) => {
  const body = JSON.stringify({
    uid: uid,
    code: familyId,
    color: color,
    relationship: relationShip
  });
  console.log(body);
  const response = await axios.put(
    "http://52.78.149.82:8081/api/family/uid/color/relationship/code",
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

export const getMyInfo = async uid => {
  const response = await axios.get("http://52.78.149.82:8081/api/family", {
    params: {
      uid: uid
    }
  });
  console.log(response.data);
  return response.data;
};
export const getGroupInfo = async (uid, code) => {
  const response = await axios.get("http://52.78.149.82:8081/api/family", {
    params: {
      uid: uid,
      code: code
    }
  });
  console.log(response.data);
  return response.data;
};
