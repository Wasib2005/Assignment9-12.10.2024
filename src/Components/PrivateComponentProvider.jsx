import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate,  useLocation } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationProvider";
import Loader from "./Others/Loader";

const PrivateComponentProvider = ({ children }) => {
  const { user, isLoading } = useContext(RegistrationContext);

  const location = useLocation();
  console.log(location.pathname);

  if (isLoading) {
    return <Loader />;
  }

  if (!user) {
    return <Navigate state={location.pathname} to={"/Registration"} />;
  }
  return <div>{children}</div>;
};

PrivateComponentProvider.propTypes = {
  children: PropTypes.node,
};

export default PrivateComponentProvider;
