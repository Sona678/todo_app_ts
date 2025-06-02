
import axios from 'axios';

export default async function fetchTodo() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];  // eauta matra
  } catch (error:any) {
    console.error('API fetch failed:', error);
    return null;
  }
}
