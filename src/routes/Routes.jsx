import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Component/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: '/',
            element: <Home/>
        }
      ]
    },
  ]);

  export default router;