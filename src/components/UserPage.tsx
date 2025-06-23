import UserForm from "./UserForm";
import UserList from "./UserList";

const UserPage = () => {
  return (
    <div className="p-6 space-y-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">User </h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserPage;
