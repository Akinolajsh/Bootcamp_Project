import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import HomeScreen from "../pages/HomeScreen";
import Home from "../pages/HomePage/Home";
import Register from "../pages/Auth/Register";
import SignIn from "../pages/Auth/SignIn";
import DashBoard from "../pages/HomePage/DashBoard";
import PrivateRoute from "./PrivateRoute";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: 
          <HomeScreen />
        
      },
    ],
  },
  {
    path: "/home",
    element: 
            <PrivateRoute>
              <Home />
            </PrivateRoute>
    
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
  },
]);
