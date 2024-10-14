import { Link, useLoaderData, useParams } from "react-router-dom";

const HouseProperties = () => {
  const houseData = useLoaderData();
  const { houseId } = useParams();

  if (!(houseData.length >= houseId)) {
    return (
      <div className="text-center">
        <h1 className="flex justify-center items-center h-52 mt-14 text-4xl font-bold text-red-700">
          No data is found
        </h1>{" "}
        <Link to={-1}>
          <button className="btn btn-outline btn-success">Go beck</button>
        </Link>
      </div>
    );
  }
  
  return (
    <div>
      <h1>324</h1>
    </div>
  );
};

export default HouseProperties;
