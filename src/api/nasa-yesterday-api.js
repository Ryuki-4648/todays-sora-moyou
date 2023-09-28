import axios from "axios";

const NASA_API_KEY = 'ZQKrkabQ5a9mlgFzWDcQJdjXHUPlEJej3TQhO14D';

const getYesterdayDate = () => {
  const today = new Date();
  const yesterday = newDate(today);
  yesterday.setDate(today.getDate() - 1); // todayをコピーして1日前に設定
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, '0'); // 1桁の月を2桁のゼロパディングされた文字列に変換
  const day = String(yesterday.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export async function fetchNasaYesterdayApiData() {
  try {
    const yesterdayResponse = await axios.get(
      `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${getYesterdayDate}`
    );

    const { title, url } = yesterdayResponse.data;
    return { title, url };

  } catch (error) {
    console.error('NASA APIリクエストエラー:', error);
    return { title: '', url: '' };
  }
}