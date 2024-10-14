import PropTypes from "prop-types";

const HouseCard = ({ house }) => {
  const {img}=house

  return (
    <div className="">
      <div className="card glass w-full md:w-96 p-5">
        <figure>
          <img
            src={img}
            alt="House img!!!"
            className="w-full h-[200px] rounded-2xl"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </div>
  );
};

HouseCard.propTypes = { house: PropTypes.object };

export default HouseCard;
