import axios from "axios";

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
  });
  return response.data;
};

export const deleteCertification = async (registeredId , date) => {

  let body = { 
    registeredId : registeredId,
    date : date
  }
  const response = await axios.put(`http://52.78.149.82:8081/api/registeredId/date`, body, {
    headers: { 'Content-type': 'application/json' }
  });
  return response.data;
};