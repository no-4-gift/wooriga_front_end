import axios from "axios";
import { message } from "antd";

export const changeLeader = async (familyId, uid, chiefId) => {
  console.log("(changeLeader)여기까지 왔다;;;;;;;;;;;;;;;;;;;;;;;;;;;");
  let leader = {
    familyId: familyId,
    uid: uid,
    chiefId: chiefId
  };
  console.log(JSON.stringify(leader));
  const params = JSON.stringify(leader);
  const response = await axios
    .post("http://52.78.149.82:8081/api/mypage/familyId/uid/chiefId", params, {
      headers: { "Content-type": "application/json" }
    })
    .then(response => {
      console.log("response됬니?");
    })
    .catch(error => {
      console.log("error있니?");
      console.log(error.response);
      message.error(`그룹장 수정에 실패했습니다..`, 2.5);
    });
  return response;
};

export const deleteMember = async uid => {
  let member = { uid: uid };
  console.log("(deleteMember)여기까지 왔다;;;;;;;;;;;;;;;;;;;;;;;;;");
  console.log(JSON.stringify(member));
  const params = JSON.stringify(member);
  const response = await axios
    .delete(`http://52.78.149.82:8081/api/mypage/delete/?uid=${uid}`, params, {
      headers: { "Content-type": "application/json" }
    })
    .then(response => {
      console.log("response됬니?");
    })
    .catch(error => {
      console.log("error있니?");
      console.log(error.response);
      message.error(`멤버삭제에 실패했습니다..`, 2.5);
    });
  return response;
};

export const postMyInfo = async (
  birth,
  color,
  email,
  familyId,
  name,
  file,
  relationship,
  uid
) => {
  let memberInfo = {
    birth: birth,
    color: color,
    email: email,
    familyId: familyId,
    name: name,
    profile: file,
    relationship: relationship,
    uid: uid
  };
  console.log(JSON.stringify(memberInfo));
  const params = JSON.stringify(memberInfo);
  const response = await axios
    .put(`http://52.78.149.82:8081/api/mypage/modify/?uid=${uid}`, params, {
      headers: { "Content-type": "application/application/json" }
    })
    .then(response => {
      console.log(response.status);
    })
    .catch(err => {
      message
        .loading("업로드 중 입니다!", 2)
        .then(() => message.error(`인증에 실패했습니다..`, 2.5));
    });

  return response;
};
