import { useContext } from "react";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { RegistrationContext } from "../Context/RegistrationProvider";
import { Navigate } from "react-router-dom";

const HouseBooking = () => {
  const { user } = useContext(RegistrationContext);
  if (!user) {
    if (user) return <Navigate to={"/Registration"} />;
  }
  return (
    <div className="grid justify-center text-current ">
      <div className="mt-7 text-9xl lg:text-[400px] text-red-700">
        <TbAlertOctagonFilled />
      </div>
      <div className="text-center text-red-700 font-bold">
        <p className="text-4xl">Failed!!!</p>
        <p className="text-2xl text-red-500">No data because there is no database</p>
        <p className="text-2xl text-red-500">If you logout from this page you should go to the login page</p>
      </div>
    </div>
  );
};

export default HouseBooking;
