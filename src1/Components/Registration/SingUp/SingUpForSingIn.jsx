import PropTypes from "prop-types";

const SingUpForSingIn = ({ singInSingUpHandle }) => {
  return (
    <>
      <div className="hidden lg:inline-flex p-[100px] pr-[50px] w-1/2  flex-col items-center justify-center gap-4 bg-info rounded-r-3xl animate-fade-right">
        <h1 className="text-6xl font-extrabold">Hello, Doc</h1>
        <p className="w-96">
          Are you new to this page? Then you have to create an account with us.{" "}
          <span className="text-white font-bold">Click Below!</span>
        </p>
        <button
          onClick={singInSingUpHandle}
          className="btn btn-outline text-white rounded-3xl text-lg font-bold w-1/3"
        >
          Sing Up
        </button>
      </div>
    </>
  );
};

SingUpForSingIn.propTypes = { singInSingUpHandle: PropTypes.func.isRequired };

export default SingUpForSingIn;
