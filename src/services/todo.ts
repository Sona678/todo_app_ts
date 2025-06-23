import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { type ITodo } from "../interface";
import Swal from "sweetalert2";

export const fetchTodo = async (page: number = 1) => {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?_limit=${page * 10}`
  );
  const todoData = response.data;
  return todoData as ITodo[];
};

export const useFetchTodo = (page: number) => {
  const queryResult = useQuery({
    queryKey: ["todos", page],
    queryFn: () => fetchTodo(page),
    onSuccess: (data) => {
      console.log(`data fetched successfully ${data.length}`);
      // Swal.fire({
      //   title: "Success!",
      //   text: "Do you want to continue",
      //   icon: "success",
      //   confirmButtonText: "Cool",
      // });
    },
    onError: (error) => {
      console.log(`error fetching data ${error}`);
    },
  });

  return queryResult;
};

export const createTodo = async (title: string) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/todos",
    { title }
  );

  const newTodo = response.data; //{id:1,title:"test"}
  const completed = Math.random() > 0.5;

  return { ...newTodo, completed };
};

export const useCreateTodo = () => {
  const queryResult = useMutation({
    mutationKey: ["todos"],
    mutationFn: createTodo,
    onSuccess: (data) => {
      console.log(`data fetched successfully ${data.length}`);
      Swal.fire({
        title: "Success!",
        text: "New todo saved successfully",
        icon: "success",
        confirmButtonText: "Cool",
      });
    },
  });

  return queryResult;
};
