import { createBrowserRouter } from "react-router-dom";
import MainFrame from "../Pages/MainFrame";
import Home from "../Pages/Home";
import RentPlaces from "../Pages/RentPlaces";
import UserLog from "../Pages/UserLog";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainFrame />,
    children: [
      { path: "/", element: <Home /> },
      { path: "rentPlaces", element: <RentPlaces /> },
      { path: "comparison" },
    ],
  },
  {
    path: "/Registration",
    element: <UserLog />,
  },
]);
