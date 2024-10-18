import { useContext } from "react";
import { RegistrationContext } from "../Context/RegistrationProvider";
import { Navigate } from "react-router-dom";

const UsersVerification = () => {
  const { user, usersVerification } = useContext(RegistrationContext);
  if (user) {
    if (user.emailVerified) {
      return <Navigate to={'/'} />;
    }
  }
  return (
    <>
      <h1>Verify your account</h1>
      <button onClick={usersVerification}>Verify</button>
    </>
  );
};

export default UsersVerification;
