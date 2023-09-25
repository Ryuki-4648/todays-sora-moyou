import axios from "axios";

const NASA_API_KEY = 'ZQKrkabQ5a9mlgFzWDcQJdjXHUPlEJej3TQhO14D';

export async function fetchNasaApiImage() {
  try {
    const response = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`
    );

    const { title, url, explanation } = response.data;
    return { title, url, explanation };

  } catch (error) {
    console.error('NASA APIリクエストエラー:', error);
    return { title: '', url: '', explanation: '' };
  }
}