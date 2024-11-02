import { createBrowserRouter } from "react-router-dom";

import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Coffee from "../pages/Coffee";
import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/coffee",
        element: <Coffee></Coffee>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
    ],
  },
]);

export default router;
