import { useContext, useEffect, useState } from "react";
import { ImSun } from "react-icons/im";
import { LuMoonStar } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { saveToLS, takeFromLS } from "../../utilities/LS";
import { MdHomeWork } from "react-icons/md";
import { RegistrationContext } from "../../Context/RegistrationProvider";
import { toast } from "react-toastify";

const Nav = () => {
  const [theme, setTheme] = useState("");
  const { user, userSingOut, usersVerification } =
    useContext(RegistrationContext);

  const handleSingOut = () => {
    userSingOut()
      .then((result) => console.log(result))
      .catch((error) => {
        console.log(error.code);
        return;
      });
    toast.warn("Good bye for now");
  };

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    setTheme(takeFromLS("theme"));
  }, []);
  useEffect(() => {
    if (theme) {
      saveToLS("theme", theme);
      document.querySelector("html").setAttribute("data-theme", theme);
    }
  }, [theme]);

  const navLinks = (
    <div className="flex gap-2">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? " text-success border-2 border-success " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/rentPlaces"}
          className={({ isActive }) =>
            isActive ? " text-success border-2 border-success " : ""
          }
        >
          Find House
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/comparison"}
          className={({ isActive }) =>
            isActive ? " text-success border-2 border-success " : ""
          }
        >
          Comparison
        </NavLink>
      </li>
    </div>
  );
  return (
    <div className="fixed grid justify-center w-full z-[999] shadow-2xl">
      <div className="w-[500px] md:w-[800px] lg:w-[1200px]">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navLinks}
              </ul>
            </div>
            <Link to={"/"}>
              <button className="btn btn-ghost flex gap-0 text-3xl font-bold">
                <MdHomeWork />
                <span className="text-blue-700">Rent</span>
                <span className=" bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
                  Buy
                </span>
              </button>
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end flex gap-2">
            <div>
              <div onClick={handleTheme} className="mr-4 ">
                <button className="btn btn-ghost rounded-full w-[55px] p-[3px] ">
                  {theme === "light" ? (
                    <ImSun className="animate-fade  animate-once" size={35} />
                  ) : (
                    <LuMoonStar
                      className="animate-fade  animate-once"
                      size={35}
                    />
                  )}
                </button>
              </div>
            </div>

            {user ? (
              <div
                className="dropdown dropdown-content tooltip tooltip-bottom "
                data-tip={
                  "Profile of : " + String(user.displayName || user.email)
                }
              >
                <div
                  tabIndex={0}
                  role="button"
                  className={`btn w-12 h-12 p-0 rounded-full ${
                    user.emailVerified ? "btn-info" : "btn-error"
                  } m-1`}
                >
                  {user.photoURL ? (
                    <img src={user.photoURL} alt="Photo" className="rounded-full "/>
                  ) : (
                    <h1 className="uppercase font-bold ">
                      {user.displayName
                        ? user.displayName.slice(0, 2)
                        : user.email.slice(0, 2)}
                    </h1>
                  )}
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow grid gap-2"
                >
                  <li className="btn">Profile</li>
                  <li onClick={userSingOut} className="btn">
                    Sing Out
                  </li>
                  {user.emailVerified || (
                    <li onClick={usersVerification} className="btn">
                      Verify now
                    </li>
                  )}
                </ul>
              </div>
            ) : (
              <Link to={"/Registration"} className="btn btn-info rounded-3xl">
                Sing In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
