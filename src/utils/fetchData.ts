export const exerciseOption = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f8102d5f70msh9db6c6cde34075dp1092e7jsn389deccb13ee',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
