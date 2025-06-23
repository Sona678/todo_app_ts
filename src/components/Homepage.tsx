import { UrlLink } from "./UrlLink";

const Homepage = () => {
  return (
    <div>
      <UrlLink />
      <div>Welcome to Todo App.</div>
      <div>
        Developed by <a href="https://github.com/amitd091">Amit D.</a>
      </div>
    </div>
  );
};

export default Homepage;
