import { createBrowserRouter } from "react-router-dom";
import Main from "./../Main/Main";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Orders from "../Orders/Orders";
import PrivateRoutes from "../Routes/PrivateRoutes";
import Profile from "../Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            <Orders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
