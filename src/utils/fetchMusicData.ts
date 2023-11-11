import Config from 'react-native-config';

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '33994ee1f7mshb7cdf3660437a8fp1b4752jsnc42ad8b490c2',
  },
};

export const musicOption = (searchParam: string) => {
  const searchParamUpdated = searchParam.replace(/ /g, '_');
  const url = `https://theaudiodb.p.rapidapi.com/playlist.php?s=${searchParamUpdated}`;

  return {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': Config.MUSIC_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'theaudiodb.p.rapidapi.com',
    },
  };
};

export const fetchMusicData = async (url, options) => {
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
