
import { useMutation, useQuery } from '@tanstack/react-query';
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

export const createTodos = async (title:string) => {
  
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
     title}
    );
  const newTodo=response.data;//{id:1, title:"test"}
  const completed=Math.random()>0.5;
    return {completed,...newTodo}; 
  
  };
  export const useCreateTodo=()=>{
  const response=useMutation({
    mutationFn:createTodos,
});
return response;
  };


export const useFetchStatus = () => {
  const { isFetching } = usefetchTodo();
  return isFetching;  
};





