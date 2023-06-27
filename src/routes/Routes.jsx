import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Information from "../components/Dashboard/Information";
import Contact from "../components/Dashboard/Contact";
import Home from "../components/Dashboard/Home";
import Guide from "../components/Dashboard/Guide";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
      children: [
        {
            path: 'home',
            element: <Home/>
        },
        {
            path: 'information',
            element: <Information/>
        },
        {
            path: 'contact',
            element: <Contact/>
        },
        {
            path: 'guide',
            element: <Guide/>
        },
      ]
    },
  ]);

  export default router;