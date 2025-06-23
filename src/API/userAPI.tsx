import axios from "axios";
import type { UserInfo } from "../interface";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


export const fetchUsers = async (): Promise<UserInfo[]> => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};


export const useFetchUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};


export const useFetchStatus = () => {
  const { isFetching } = useFetchUsers();
  return isFetching;
};

export const createUser = async (name: string) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", {
    name
  });

  const newUser = response.data; 

  const email = `${name.toLowerCase()}@example.com`;

  return { ...newUser, email };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData<UserInfo[]>(["users"], (oldUsers = []) => [

        newUser,...oldUsers
      ]);
    },
  });
};