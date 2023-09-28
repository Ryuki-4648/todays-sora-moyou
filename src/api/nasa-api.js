import axios from "axios";

const NASA_API_KEY = 'ZQKrkabQ5a9mlgFzWDcQJdjXHUPlEJej3TQhO14D';

export async function fetchNasaApiData() {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );

    const { title, url, explanation, date, copyright } = response.data;
    return { title, url, explanation, date, copyright };

  } catch (error) {
    console.error('NASA APIリクエストエラー:', error);
    return { title: '', url: '', explanation: '', date: '', copyright: '' };
  }
}