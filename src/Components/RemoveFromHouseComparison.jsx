import PropTypes from "prop-types";
import { toast } from "react-toastify";
import { saveToLS } from "../utilities/LS";
import { useEffect } from "react";

const RemoveFromHouseComparison = ({
  houseData,
  setCompareList,
  compareList,
}) => {
  const { id } = houseData;

  useEffect(() => {
    if (compareList.length) {
      saveToLS("compareList", compareList);
    }
    if (compareList.length === 0) {
      localStorage.removeItem("compareList");
    }
  }, [compareList]);

  const compareHandle = () => {
    if (compareList.includes(houseData.id)) {
      setCompareList(compareList.filter((item) => item !== houseData.id));
      toast.error(` House No. ${id} has been removed from Compare List`);
    } else {
      toast.success(` House No. ${id} has been added from Compare List`);
      setCompareList([...compareList, houseData.id]);
    }
  };
  return (
    <div>
      <p
        onClick={compareHandle}
        className="hover:bg-slate-700 underline underline-offset-2 hover:underline-offset-4 "
      >
        House No.{id} <span className="text-red-600">remove from the list</span>
      </p>
    </div>
  );
};

RemoveFromHouseComparison.propTypes = {
  houseData: PropTypes.object,
  compareList: PropTypes.array.isRequired,
  setCompareList: PropTypes.func.isRequired,
};

export default RemoveFromHouseComparison;
