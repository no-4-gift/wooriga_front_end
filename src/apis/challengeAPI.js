import axios from "axios";
import { message } from "antd";
export const getChallenger = async (familyId, userId) => {
  const response = await axios.get(`http://52.78.149.82:8081/api/familyId/uid?familyId=${familyId}&uid=${userId}`);

  return response.data;
};

export const getParticipation = async (familyId, userId) => {
    const response = await axios.get(`http://52.78.149.82:8081/api/familyId/uid/bool?familyId=${familyId}&uid=${userId}`);
    return response.data;
};
  
export const getDetail = async (registeredId , userId) => {
  const response = await axios.get(`http://52.78.149.82:8081/api/uid/registeredId?registeredId=${registeredId}&uid=${userId}`);
  return response.data;
};

export const postCertification = async (registeredFk , date, file) => {

  let form = new FormData()
  form.append('registeredFk', registeredFk);
  form.append('date', date);
  form.append('file', file);

  const response = await axios.post(`http://52.78.149.82:8081/api/registeredFk`, form, {
    headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  })
  .then((response) => {
    console.log(response.status);
    message.loading('업로드 중 입니다!', 2)
    .then(() => message.success(`인증에 성공했습니다!`, 2.5))
    
  })
  .catch((err) => {
    message.loading('업로드 중 입니다!', 2)
    .then(() => message.error(`인증에 실패했습니다..`, 2.5))
  })

  return response;
};

export const deleteCertification = async (registeredId , date) => {

  let body = { 
    registeredId : registeredId,
    date : date
  }
  const response = await axios.put(`http://52.78.149.82:8081/api/registeredId/date`, body, {
    headers: { 'Content-type': 'application/json' }
  })
  .then((response) => {
    console.log(response.status);
    message.success(`삭제에 성공했습니다!`, 2.5)
    
  })
  .catch((err) => {
    message.error(`삭제에 실패했습니다..`, 2.5)
  })
  return response;
};