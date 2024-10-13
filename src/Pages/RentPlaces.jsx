import { NavLink, Outlet } from "react-router-dom";

const RentPlaces = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-4xl lg:text-6xl font-bold">
        Our best selection Houses
      </h1>
      <div className="mt-[100px]">
        <ul className=" justify-between flex gap-2">
          <NavLink
            to={"all"}
            className={({ isActive }) =>
              isActive ? " underline decoration-2 " : ""
            }
          >
            <li className=" font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-4">
              All
            </li>
          </NavLink>
          <NavLink
            to={"family"}
            className={({ isActive }) =>
              isActive ? "underline  decoration-2 " : ""
            }
          >
            <li className=" font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-4">
              Family
            </li>
          </NavLink>
          <NavLink
            to={"student"}
            className={({ isActive }) =>
              isActive ? "underline  decoration-2" : ""
            }
          >
            <li className=" font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-4">
              Student
            </li>
          </NavLink>
          <NavLink
            to={"single"}
            className={({ isActive }) =>
              isActive ? "underline  decoration-2" : ""
            }
          >
            <li className=" font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-4">
              Single
            </li>
          </NavLink>
          <NavLink
            to={"couple"}
            className={({ isActive }) =>
              isActive ? "underline  decoration-2" : ""
            }
          >
            <li className=" font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-4">
              Couple
            </li>
          </NavLink>
          <NavLink
            to={"SeniorCitizen"}
            className={({ isActive }) =>
              isActive ? "underline  decoration-2" : ""
            }
          >
            <li className=" font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-4">
              Senior Citizen
            </li>
          </NavLink>
        </ul>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RentPlaces;
