import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex justify-center items-center ml-6 mr-6 min-w-[640px] min-h-[calc(100vh-(48px+373px))]">
      <HashLoader size={200}/>
    </div>
  );
};

export default Loader;
