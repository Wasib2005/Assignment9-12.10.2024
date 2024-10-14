import { Outlet } from "react-router-dom";
import Nav from "../Components/MainComponent/Nav";
import Footer from "../Components/MainComponent/Footer";

const MainFrame = () => {
  return (
    <div className="min-w-[500px]">
      <Nav />
      <div className=" m-auto lg:w-[1150px]">
        <div className="pt-[75px]  min-h-[calc(100vh-70px-155px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainFrame;
