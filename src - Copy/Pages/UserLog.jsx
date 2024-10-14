import { useState } from "react";
import SingInForSingIn from "../Components/Registration/SingIn/SingInForSingIn";
import SingInForSingUp from "../Components/Registration/SingIn/SingInForSingUp";
import SingUpForSingIn from "../Components/Registration/SingUp/SingUpForSingIn";
import SingUpForSingUp from "../Components/Registration/SingUp/SingUpForSingUp";
import { Link } from "react-router-dom";
import { MdHomeWork } from "react-icons/md";

const UserLog = () => {
  const [singIn, setSingIn] = useState(true);
  document.querySelector("html").setAttribute("data-theme", "light");
  const singInSingUpHandle = () => {
    setSingIn(!singIn);
  };
  return (
    <>
      <Link to={"/"} className="">
        <button className="mt-10 m-auto  flex gap-4 p-1 text-6xl font-bold">
          <MdHomeWork />
          <span>
            <span className="text-blue-700">Rent</span>
            <span className=" bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient">
              Buy
            </span>
          </span>
        </button>
      </Link>

      <div className="flex justify-center items-center h-[calc(100vh-90px)] text-center text-black p-40">
        <div className=" animate-fade-up w-[650px] lg:w-[1200px] lg:h-[700px] border rounded-3xl shadow-2xl flex lg:animate-fade animate-once animate-delay-2000 animate-ease-out">
          {singIn ? (
            <SingInForSingIn singInSingUpHandle={singInSingUpHandle} />
          ) : (
            <SingInForSingUp singInSingUpHandle={singInSingUpHandle} />
          )}
          {singIn ? (
            <SingUpForSingIn singInSingUpHandle={singInSingUpHandle} />
          ) : (
            <SingUpForSingUp singInSingUpHandle={singInSingUpHandle} />
          )}
        </div>
      </div>
    </>
  );
};

export default UserLog;
