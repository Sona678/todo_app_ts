
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type { TodoItem } from '../interface';

export default async function fetchTodo() {
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
    return data as TodoItem[];
  } catch (error:unknown) {
    console.error('API fetch failed:', error);
    return null;
  }
};
export const usefetchTodo=()=>{
  const queryResult=useQuery({
    queryKey:["todos"],
    queryFn:fetchTodo,
  });
  return queryResult;
}
