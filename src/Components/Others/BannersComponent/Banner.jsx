import PropTypes from "prop-types";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = ({ banner, i }) => {
  if (banner.img === undefined) {
    return;
  }
  return (
    <>
      <div id={`slide${i + 1}`} className="carousel-item relative w-full">
        <img src={banner.img} className="w-full" />

        <div className="absolute w-full h-full rounded-3xl m-auto bg-slate-400 opacity-40"></div>

        <div className="absolute top-[15%] md:top-[25%] left-[10%] z-10 grid gap-6 text-left justify-start">
          <h1 className=" text-success text-3xl md:text-5xl lg:text-6xl font-bold w-[80%]">
            Discover Your Perfect House: Affordable Options for All
          </h1>
          <div>
            <button>
              <Link
                to={'/rentPlaces/all'}
                className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-green-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group"
              >
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-green-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                  Explore More
                </span>
              </Link>
            </button>
          </div>
        </div>

        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-10">
          <div>
            <a
              href={`#slide${i}`}
              className={`btn btn-circle btn-ghost text-3xl  hover:bg-slate-500 ${
                i === 0 ? "hidden" : ""
              }`}
            >
              <FaArrowAltCircleLeft />
            </a>
          </div>
          <div>
            <a
              href={`#slide${i + 2}`}
              className={`btn btn-circle btn-ghost text-3xl  hover:bg-slate-500  ${
                i === 4 ? "hidden" : ""
              }`}
            >
              <FaArrowAltCircleRight />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

Banner.propTypes = {
  banner: PropTypes.object,
  i: PropTypes.number,
};

export default Banner;
