import { createBrowserRouter } from "react-router-dom";
import { UrlLink } from "../components/UrlLink";
import Todo from "../components/Todo";
import UserPage from "../components/UserPage";
import UseContextDemo from "../contextDemo/UseContextDemo";
import LoginSignup from "../components/login";
import ProtectedRoute from "../components/ProtectedRoute";

const routes = [
  {
    path: "/",
    element: <LoginSignup />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <UrlLink />
      </ProtectedRoute>
    ),
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute>
        <Todo />
      </ProtectedRoute>
    ),
  },
  {
    path: "/User",
    element: (
      <ProtectedRoute>
        <UserPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/useContextDemo",
    element: (
      <ProtectedRoute>
        <UseContextDemo />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <h1 className="">404 error</h1>,
  },
];

const router = createBrowserRouter(routes);
export default router;
