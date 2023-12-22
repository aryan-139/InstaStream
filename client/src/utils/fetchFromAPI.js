import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: BASE_URL,
    params: {
      maxResults: 50
    },
    headers: {
      'X-RapidAPI-Key': '26bc660602mshcd46f65d7a76108p1c9f0bjsn46adcb253238',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options)
    return data;
  }

//   baseUrl/getVideos/