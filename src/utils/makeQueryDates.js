const maxChallengeDateLength = 10;

export const makeQueryDates = dateList => {
  const queryDates = [];
  for (let i = 0; i < maxChallengeDateLength; i++) queryDates[i] = "";
  dateList.sort();
  for (let i = 0; i < dateList.length; i++) queryDates[i] = dateList[i];
  let queryString = "";
  for (let i = 0; i < maxChallengeDateLength; i++) {
    queryString += `date${i + 1}=${queryDates[i]}`;
    if (i !== maxChallengeDateLength - 1) queryString += "&";
  }

  return queryString;
};
