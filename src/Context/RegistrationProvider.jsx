import { createUserWithEmailAndPassword } from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { auth } from "../utilities/SingIn_SingUp";

export const RegistrationContext = createContext(null);

const RegistrationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = { user, createUser };

  return (
    <RegistrationContext.Provider value={userInfo}>
      {children}
    </RegistrationContext.Provider>
  );
};

RegistrationProvider.propTypes = {
  children: PropTypes.node,
};

export default RegistrationProvider;
