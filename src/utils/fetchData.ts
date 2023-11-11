export const exerciseOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.EXERCISE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  console.log('apix', process.env.EXERCISE_APP_RAPID_API_KEY);
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
