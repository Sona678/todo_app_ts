import { useState } from "react";
import { useCreateUser } from "../API/userAPI";

const UserForm = () => {
  const [name, setName] = useState("");
  const { mutate, isLoading, error } = useCreateUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    mutate(name, {
      onSuccess: () => {
        setName("");  // Clear input only on success
      },
      onError: (err) => {
        console.error("Failed to add user:", err);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
        disabled={isLoading}
      />
      <button 
        type="submit" 
        className="bg-blue-600 text-white px-4 py-2 rounded" 
        disabled={isLoading}
      >
        {isLoading ? "Adding..." : "Add User"}
      </button>

    </form>
  );
};

export default UserForm;
