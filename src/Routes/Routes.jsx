import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Accounts/Login";
import Main from "../Layouts/Main/Main";
import Register from "../Pages/Accounts/Register";
import ProtectedRoutes from "./ProtectedRoutes";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Accounting from "../Pages/Accounting/Accounting";
import Reports from "../Pages/Reports/Reports";
import Profile from "../Pages/Profile/Profile";
import RedirectRouting from "./RedirectRouting";

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
          path: '/profile',
          element: <ProtectedRoutes><Profile></Profile></ProtectedRoutes>
        },
        {
            path: "/login",
            element: <RedirectRouting><Login></Login></RedirectRouting>
        },
        {
            path: "/register",
            element: <RedirectRouting><Register></Register></RedirectRouting>
        }
      ]
    },
    
  ]);