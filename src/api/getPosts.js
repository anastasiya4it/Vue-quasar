import axios from "axios";

export async function getPosts() {
  try {
    const response = await axios.get(
      `https://api.nytimes.com/svc/mostpopular/v2/emailed/1.json?api-key=VUwQywMe3eZJyT1ATMQ6doGaKFvGFfHz`
    );
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.log(error);
    throw error; // Проброс ошибки для дальнейшей обработки
  }
}