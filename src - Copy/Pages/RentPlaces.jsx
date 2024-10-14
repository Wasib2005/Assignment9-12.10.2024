import { NavLink, Outlet } from "react-router-dom";

const RentPlaces = () => {
  return (
    <div className="mt-14 h-20 lg:mt-[100px]">
      <div className="bg-black bg-opacity-50 h-24 lg:h-40 flex items-center justify-center">
        <h1 className="mt text-4xl  lg:text-6xl font-bold">
          Our best selection Houses
        </h1>
      </div>
      <div className="mt-[100px]">
        <ul className=" justify-between flex gap-2">
          <NavLink
            to={"all"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            All
          </NavLink>
          <NavLink
            to={"family"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Family
          </NavLink>
          <NavLink
            to={"student"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Student
          </NavLink>
          <NavLink
            to={"single"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Single
          </NavLink>
          <NavLink
            to={"couple"}
            className={({ isActive }) =>
              isActive
                ? "font-bold text-lg underline hover:bg-slate-600 underline-offset-8"
                : "font-bold text-lg hover:underline hover:bg-slate-600 hover:underline-offset-8"
            }
          >
            Couple
          </NavLink>
          <NavLink
            to={"SeniorCitizen"}
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
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default RentPlaces;
