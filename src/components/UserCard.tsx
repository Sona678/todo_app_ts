import type { UserInfo } from "../interface";


type Props = {
  user: UserInfo;
};

const UserCard = ({ user }: Props) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p className="text-sm text-gray-600">{user.email}</p>
    </div>
  );
};

export default UserCard;