import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Accounts/Login";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Accounts/Register";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>
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