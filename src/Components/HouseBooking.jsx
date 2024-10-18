import { useContext } from "react";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { RegistrationContext } from "../Context/RegistrationProvider";
import { Navigate } from "react-router-dom";

const HouseBooking = () => {
  const { user } = useContext(RegistrationContext);
  if (!user) {
    if (user)
    return <Navigate to={"/Registration"} />;
  }
  return (
    <div className="grid justify-center text-current ">
      <div className="mt-7 text-9xl lg:text-[400px] text-red-700">
        <TbAlertOctagonFilled />
      </div>
      <h1 className="text-center text-3xl font-bold text-red-700">No data</h1>
    </div>
  );
};

export default HouseBooking;
