import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { auth } from "../utilities/SingIn_SingUp";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const RegistrationContext = createContext(null);

const RegistrationProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const GoogleProvider = new GoogleAuthProvider();
  const GitHubProvider = new GithubAuthProvider();
  const FacebookProvider = new FacebookAuthProvider();

  const SingInOrSingUpWithGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then()
      .catch((error) => console.log(error));
  };

  const SingInOrSingUpWithGitHub = () => {
    signInWithPopup(auth, GitHubProvider)
      .then()
      .catch((error) => console.log(error));
  };
  const SingInOrSingUpWithFacebook = () => {
    signInWithPopup(auth, FacebookProvider)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const usersVerification = () => {
    return sendEmailVerification(auth.currentUser).then(() =>
      toast.info(
        `An email is send to ${user.email}. check the mail and verify your email!!!`
      )
    );
  };

  const userSingOut = () => {
    signOut(auth);
  };

  const updateUserProfile = (data) => {
    updateProfile(auth.currentUser, data)
      .then()
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authDates = {
    user,
    singInUser,
    userSingOut,
    createUser,
    updateUserProfile,
    usersVerification,
    SingInOrSingUpWithGoogle,
    SingInOrSingUpWithGitHub,
    SingInOrSingUpWithFacebook,
  };

  return (
    <RegistrationContext.Provider value={authDates}>
      {children}
    </RegistrationContext.Provider>
  );
};

RegistrationProvider.propTypes = {
  children: PropTypes.node,
};

export default RegistrationProvider;
