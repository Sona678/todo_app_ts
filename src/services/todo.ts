import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type ITodo } from "../interface";

export const fetchTodo = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?_limit=10"
  );
  const todoData = response.data;
  return todoData as ITodo[];
};

export const useFetchTodo = () => {
  const queryResult = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });

  return queryResult;
};
