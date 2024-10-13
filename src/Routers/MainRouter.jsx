import { createBrowserRouter } from "react-router-dom";
import MainFrame from "../Pages/MainFrame";
import Home from "../Pages/Home";
import RentPlaces from "../Pages/RentPlaces";
import UserLog from "../Pages/UserLog";
import RentPlacesAll from "../Components/Others/RentPlacesAll";
import RentPlacesSingle from "../Components/Others/RentPlacesSingle";
import RentPlacesSeniorCitizen from "../Components/Others/RentPlacesSeniorCitizen";
import RentPlacesStudent from "../Components/Others/RentPlacesStudent";
import RentPlacesFamily from "../Components/Others/RentPlacesFamily";
import RentPlacesCouple from "../Components/Others/RentPlacesCouple";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainFrame />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch("data.json") },
      {
        path: "rentPlaces",
        element: <RentPlaces />,
        loader: () => fetch("data.json"),
        children: [
          { path: "all", element: <RentPlacesAll /> },
          { path: "family", element: <RentPlacesFamily /> },
          { path: "student", element: <RentPlacesStudent /> },
          { path: "single", element: <RentPlacesSingle /> },
          { path: "couple", element: <RentPlacesCouple /> },
          { path: "SeniorCitizen", element: <RentPlacesSeniorCitizen /> },
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
