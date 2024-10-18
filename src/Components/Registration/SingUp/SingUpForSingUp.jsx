import { useContext, useState } from "react";
import {
  FaFacebookF,
  FaGithubSquare,
  FaGoogle,
  FaRegEye,
} from "react-icons/fa";
import { RiEyeCloseLine } from "react-icons/ri";
import { RegistrationContext } from "../../../Context/RegistrationProvider";
import { toast } from "react-toastify";

const SingUpForSingUp = () => {
  const {
    createUser,
    updateUserProfile,
    SingInOrSingUpWithGoogle,
    SingInOrSingUpWithGitHub,
    SingInOrSingUpWithFacebook,
  } = useContext(RegistrationContext);

  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    const tempShowPassword = !showPassword;
    setShowPassword(tempShowPassword);
    if (tempShowPassword) {
      document.getElementById("password").type = Text;
      document.getElementById("ConformPassword").type = Text;
    } else {
      document.getElementById("password").type = "Password";
      document.getElementById("ConformPassword").type = "Password";
    }
  };

  const handleSingIn = (e) => {
    e.preventDefault();
    const usrForm = e.target;
    const displayName = usrForm.name.value;
    const profileInfoObj = { displayName };

    const userEmail = usrForm.email.value;
    const userPassword = usrForm.password.value;
    const userConformPassword = usrForm.ConformPassword.value;

    const passwordLength = 8;
    if (userPassword.length <= passwordLength) {
      toast.error(`The password must be more then ${passwordLength}`);
      return;
    } else if (!/[0-9]/.test(userPassword)) {
      toast.error("You have to use at least one digit (0-9)");
      return;
    } else if (!/[A-Z]/.test(userPassword)) {
      toast.error("You have to use at least one uppercase  (A-Z)");
      return;
    } else if (!/[a-z]/.test(userPassword)) {
      toast.error("You have to use at least one lowercase  (a-z)");
      return;
    } else if (!/[@#$%^&*(){}+-=?<>,.`~']/.test(userPassword)) {
      toast.error("You have to use at least one special character");
      return;
    } else if (userPassword !== userConformPassword) {
      toast.error("The passwords don't match");
      return;
    }

    createUser(userEmail, userPassword)
      .then((result) => {
        updateUserProfile(profileInfoObj);
        toast(
          `Thanks for Sing up with us!!! ${
            result.user.displayName || result.user.email
          } `
        );
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          error.code === "auth/email-already-in-use" &&
            `The email ${userEmail} already exist`
        );
      });
  };

  return (
    <div className="grid gap-6 p-[36px] w-full lg:w-1/2 animate-fade">
      <h1 className="text-6xl font-extrabold">Sing Up</h1>
      <div className="flex gap-2 justify-center">
        <div
          onClick={SingInOrSingUpWithFacebook}
          className="flex items-center border rounded-full  p-3 px-5 hover:bg-green-200"
        >
          <FaFacebookF size={35} />
        </div>
        <div
          onClick={SingInOrSingUpWithGoogle}
          className="flex items-center border rounded-full  p-3 px-5 hover:bg-green-200"
        >
          <FaGoogle size={35} />
        </div>
        <div
          onClick={SingInOrSingUpWithGitHub}
          className="flex items-center border rounded-full  p-3 px-5 hover:bg-green-200"
        >
          <FaGithubSquare size={35} />
        </div>
      </div>
      <p>or use your account</p>
      <form onSubmit={handleSingIn} className="flex flex-col w-96 gap-3 m-auto">
        <input
          placeholder="Enter Your Name"
          type="text"
          name="name"
          className="p-3 bg-slate-300 focus:outline-none focus:outline-success"
          required
        />
        <input
          placeholder="Enter Email"
          type="email"
          name="email"
          className="p-3 bg-slate-300  focus:outline-none focus:outline-success"
          required
        />
        <div className="flex relative">
          <input
            id="password"
            placeholder="Enter A Password"
            type="password"
            name="password"
            className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-success"
            required
          />
          <div
            onClick={handleShowPassword}
            className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
          >
            {showPassword ? (
              <RiEyeCloseLine size={25} />
            ) : (
              <FaRegEye size={25} />
            )}
          </div>
        </div>
        <div className="flex relative">
          <input
            id="ConformPassword"
            placeholder="Conform The Password"
            type="password"
            name="ConformPassword"
            className="p-3 bg-slate-300 w-full  focus:outline-none focus:outline-success"
            required
          />
          <div
            onClick={handleShowPassword}
            className="absolute top-[10px] right-3 hover:bg-slate-100 rounded-full"
          >
            {showPassword ? (
              <RiEyeCloseLine size={25} />
            ) : (
              <FaRegEye size={25} />
            )}
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-success rounded-3xl font-bold text-white text-lg w-1/2 m-auto"
        >
          Sing Up
        </button>
      </form>
    </div>
  );
};

export default SingUpForSingUp;
