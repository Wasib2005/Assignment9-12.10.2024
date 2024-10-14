import { Navigate, NavLink, Outlet } from "react-router-dom";

const RentPlaces = () => {
  return (
    <div className="mt-[100px] text-center">
      <h1 className="text-4xl lg:text-6xl font-bold">
        Our best selection Houses
      </h1>
      <div className="mt-[100px]">
        <ul className=" justify-between flex gap-2">
          <NavLink
            to={"/rentPlaces/all"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8 hover:disabled:checked:"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            All
          </NavLink>
          <NavLink
            to={"/rentPlaces/family"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Family
          </NavLink>
          <NavLink
            to={"/rentPlaces/student"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Student
          </NavLink>
          <NavLink
            to={"/rentPlaces/single"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Single
          </NavLink>
          <NavLink
            to={"/rentPlaces/couple"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Couple
          </NavLink>
          <NavLink
            to={"/rentPlaces/SeniorCitizen"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Senior Citizen
          </NavLink>
        </ul>
      </div>
            <Navigate  to="all"/>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RentPlaces;
