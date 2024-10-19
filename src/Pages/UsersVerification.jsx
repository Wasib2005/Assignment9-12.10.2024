import { useContext } from "react";
import { RegistrationContext } from "../Context/RegistrationProvider";
import { Link, Navigate } from "react-router-dom";

const UsersVerification = () => {
  const { user, usersVerification } = useContext(RegistrationContext);
  if (user) {
    if (user.emailVerified) {
      return <Navigate to={"/"} />;
    }
  }
  return (
    <>
      <div className="h-[100vh] grid justify-center items-center text-center">
        <div className="grid gap-5">
          <h1 className="font-bold text-3xl">Verify your account</h1>
          <button
            onClick={usersVerification}
            className="btn m-auto w-1/2 text-white btn-success"
          >
            Verify Now
          </button>
          <button className="btn m-auto w-1/2 text-white btn-info">
            <Link to={'/'}>Go Home</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default UsersVerification;
