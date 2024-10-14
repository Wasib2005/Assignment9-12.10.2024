import { createBrowserRouter } from "react-router-dom";
import MainFrame from "../Pages/MainFrame";
import Home from "../Pages/Home";
import RentPlaces from "../Pages/RentPlaces";
import UserLog from "../Pages/UserLog";
import RentPlacesAll from "../Components/Others/RentPlacesComponent/RentPlacesAll";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainFrame />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("/public/data.json") },
      {
        path: "rentPlaces",
        element: <RentPlaces />,
        children: [
          {
            path: "all",
            element: <RentPlacesAll />,
            loader: () => fetch("/public/data.json"),
          },
        ],
      },
      { path: "comparison" },
    ],
  },
  {
    path: "/Registration",
    element: <UserLog />,
  },
]);
