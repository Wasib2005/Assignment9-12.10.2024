import { createBrowserRouter } from "react-router-dom";
import MainFrame from "../Pages/MainFrame";
import Home from "../Pages/Home";
import RentPlaces from "../Pages/RentPlaces";
import UserLog from "../Pages/UserLog";
import RentPlacesList from "../Components/Others/RentPlacesComponent/RentPlacesList";
import HouseProperties from "../Pages/HouseProperties";

import HouseComparison from "../Pages/HouseComparison";

export const MainRouter = createBrowserRouter([
  {
    element: <MainFrame />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "rentPlaces",
        element: <RentPlaces />,
        children: [
          {
            path: ":typeId",
            element: <RentPlacesList />,
            loader: () => fetch("/public/data.json"),
          },
        ],
      },
      {
        path: "PlacesProperties/:houseId",
        element: <HouseProperties />,
        loader: () => fetch("/public/data.json"),
      },
      {
        path: "comparison",
        element: <HouseComparison />,
        loader: () => fetch("/public/data.json"),
      },
    ],
  },
  {
    path: "/Registration",
    element: <UserLog />,
  },
]);
