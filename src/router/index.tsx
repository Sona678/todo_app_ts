import { createBrowserRouter } from "react-router-dom";
import { UrlLink } from "../components/UrlLink";
import Todo from "../components/Todo";
import UserPage  from "../components/UserPage";


const routes=[
    {
      path:"/",
      element:(
        <h1>Welcome to todo app
            <UrlLink/>
        </h1>
      ),
    },
     {
        path:"/demo",
        element:(<h1>Welcome to demo 
            <UrlLink/>
        </h1>
        ),
    },
    {
        path:"/todo",
        element:
        <Todo/>
    },
    {
        path:"/User",
        element:
        <UserPage/>
    },
    {
        path:"*",
        element:<h1 className="">404 error </h1>
    }
]
const router=createBrowserRouter(routes);
export default router;
