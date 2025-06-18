
import axios from 'axios';

export default async function fetchTodo() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
    return data;
  } catch (error:any) {
    console.error('API fetch failed:', error);
    return null;
  }
}
