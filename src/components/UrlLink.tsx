import { Link } from "react-router-dom";

export const UrlLink = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <Link
        className="text-cyan-400 border-b-2 border-cyan-400 border-solid"
        to="/"
      >
        Home
      </Link>
      <Link
        className="text-cyan-400 border-b-2 border-cyan-400 border-solid"
        to="/demo"
      >
        Demo
      </Link>
      <Link
        className="text-cyan-400 border-b-2 border-cyan-400 border-solid"
        to="/todo"
      >
        todo
      </Link>
      <Link
        className="text-cyan-400 border-b-2 border-cyan-400 border-solid"
        to="/User"
      >
        User
      </Link>

    </div>
  );
};