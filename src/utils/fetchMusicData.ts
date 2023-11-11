import Config from 'react-native-config';

const musicOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': Config.MUSIC_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  },
};

export const fetchMusicData = async (url) => {
  try {
    const response = await fetch(url, musicOption);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
