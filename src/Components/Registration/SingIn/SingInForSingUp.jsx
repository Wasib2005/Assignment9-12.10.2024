import PropTypes from "prop-types";

const SingInForSingUp = ({ singInSingUpHandle }) => {
  return (
    <>
      <div className="hidden lg:inline-flex p-[100px] pr-[50px] w-1/2  flex-col items-center justify-center gap-4 bg-success rounded-l-3xl animate-fade-right">
        <h1 className="text-6xl font-extrabold">Hello, Doc</h1>
        <p className="w-96">
          Are you an old friend of this page? Then you can Sing In by using your
          Email and Password.{" "}
          <span className="text-white font-bold">Click Below!</span>
        </p>
        <button
          onClick={singInSingUpHandle}
          className="btn btn-outline text-white rounded-3xl w-1/3 text-lg font-bold"
        >
          Sing In
        </button>
      </div>
    </>
  );
};

SingInForSingUp.propTypes = { singInSingUpHandle: PropTypes.func.isRequired };

export default SingInForSingUp;
