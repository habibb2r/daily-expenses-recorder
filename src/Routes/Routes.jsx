import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Accounts/Login";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Dashboard/Dashboard";
import Register from "../Pages/Accounts/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Accounting from "../Pages/Accounting/Accounting";
import Reports from "../Pages/Reports/Reports";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <ProtectedRoutes><Dashboard></Dashboard></ProtectedRoutes>
        },
        {
          path: '/accounting',
          element: <ProtectedRoutes><Accounting></Accounting></ProtectedRoutes>
        },
        {
          path: '/reports',
          element: <ProtectedRoutes><Reports></Reports></ProtectedRoutes>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
            path: "/register",
            element: <Register></Register>
        }
      ]
    },
    
  ]);