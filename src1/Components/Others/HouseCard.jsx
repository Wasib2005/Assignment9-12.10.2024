import PropTypes from "prop-types";

const HouseCard = ({ houseData }) => {
  const { id, img, type, availableFrom, small_description } = houseData;

  return (
    <div className="w-full lg:w-[380px] flex flex-grow text-left">
      <div className="card glass w-full grid items-center justify-center p-5">
        <figure className="w-[330px] h-[200px] rounded-lg">
          <img src={img} alt="House img!" />
        </figure>
        <div className="card-body grid gap-5">
          <h2 className="card-title font-bold text-slate-900">House No. {id}</h2>
          <p>{small_description}</p>
          <p className="font-bold">Recommended for {type}</p>
          <p>
            Available From: <span className="font-bold">{availableFrom}</span>
          </p>
          <div className="card-actions ">
            <button>
              <a
                href="#_"
                className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
              >
                <span className="w-full h-full bg-gradient-to-br from-[#9fff05] via-[#54ffa1] to-[#00eeff] group-hover:from-[#00ff2a] group-hover:via-[#68ff54] group-hover:to-[#05e2ff] absolute" />
                <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
                  <span className="relative text-white">Check Out</span>
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

HouseCard.propTypes = {
  houseData: PropTypes.object,
};

export default HouseCard;
