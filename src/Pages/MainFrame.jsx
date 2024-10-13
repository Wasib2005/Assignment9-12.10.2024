import { Outlet } from "react-router-dom";
import Nav from "../Components/MainComponent/Nav";
import Footer from "../Components/MainComponent/Footer";

const MainFrame = () => {
  return (
    <div className="text-center min-w-[500px] lg:min-w-[1210px] ">
      <Nav />
      <div className="text-center m-auto w-[500px] lg:w-[1210px]">
        <div className="pt-[75px]  min-h-[calc(100vh-70px-155px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainFrame;
