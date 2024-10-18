import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { RegistrationContext } from "../Context/RegistrationProvider";

const PrivateComponentProvider = ({ children }) => {
  const { user } = useContext(RegistrationContext);
  if (!user) {
    return <Navigate to={"/Registration"} />;
  }
  return <div>{children}</div>;
};

PrivateComponentProvider.propTypes = {
  children: PropTypes.node,
};

export default PrivateComponentProvider;
