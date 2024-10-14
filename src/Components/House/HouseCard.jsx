import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const HouseCard = ({ house }) => {
  const {
    img,
    small_description,
    id,
    totalRooms,
    type,
    availableFrom,
    location__address,
    segment_name,
    rent,
  } = house;

  return (
    <div className="flex flex-grow">
      <div className="card glass w-full md:w-96 p-5">
        <figure>
          <img
            src={img}
            alt="House img!!!"
            className="w-full h-[200px] rounded-2xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-black">{`House No. ${id}`}</h2>
          <hr className="border-dashed" />
          <h3 className="font-bold">{segment_name}</h3>
          <p>{small_description}</p>
          <hr className="border-dashed" />
          <p>
            In a word idle for <span className="font-bold">{type}</span>
          </p>
          <hr className="border-dashed" />

          <p className="font-bold flex justify-between">
            <span>Total room:</span>
            <span className="font-extrabold">{totalRooms}</span>
          </p>
          <p className="font-bold flex justify-between">
            <span>Rent:</span>
            <span className="font-extrabold">{rent}</span>
          </p>
          <p className="font-bold flex justify-between">
            <span>Available From: </span>
            <span className="font-extrabold">{availableFrom}</span>
          </p>
          <hr className="border-dashed" />
          <p className="font-bold">
            Location/Address:{" "}
            <span className="font-extrabold underline">
              {location__address}
            </span>
          </p>
          <hr className="border-dashed" />
          <div className="card-actions ">
            <button>
              <NavLink
                to={`/PlacesProperties/${id}`}
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#9fff05] via-[#54ffa1] to-[#00eeff] group-hover:from-[#00ff2a] group-hover:via-[#68ff54] group-hover:to-[#05e2ff] absolute" />
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Check Out</span>
                </span>
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HouseCard.propTypes = { house: PropTypes.object };

export default HouseCard;
