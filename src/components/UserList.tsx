// src/components/User/UserList.tsx
import { useQuery } from "@tanstack/react-query";
import UserCard from "./UserCard";
import {fetchUsers} from "../API/userAPI";

const UserList = () => {
  const { data: users, isLoading} = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;

  return (
    <div className="grid gap-4">
      {users?.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;
