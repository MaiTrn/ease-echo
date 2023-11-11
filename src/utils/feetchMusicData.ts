const axios = require('axios');

export const musicOptions = {
  method: 'GET',
  url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
  params: { q: 'relaxing playlist' },
  headers: {
    'X-RapidAPI-Key': '',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
  },
};

export const fetchMusicData = async (url, options) => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
