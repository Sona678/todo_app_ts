import { createBrowserRouter } from "react-router-dom";
import { UrlLink } from "../components/UrlLink";
import Todo from "../components/Todo";
import { Demo } from "../components/Demo";
import Homepage from "../components/Homepage";

const routes = [
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/demo",
    element: <Demo />,
  },
  {
    path: "/todo",
    element: <Todo />,
  },
  {
    path: "/user",
    element: <h1>user list</h1>   ,
  },
  {
    path: "*",
    element: (
      <h1 className="text-red-500">
        <UrlLink />
        404, page not found
      </h1>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
