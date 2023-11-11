import Config from 'react-native-config';

export const exerciseOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': Config.EXERCISE_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchExerciseData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
