import React from "react";
import { useGlobalContext } from "../context/context";
import { RiCloseLine } from "react-icons/ri";

const Filters = () => {
  const { filtersData, setFiltersData } = useGlobalContext();
  const deleteFilter = (strFilter) => {
    const newFilters = filtersData.filter((item) => item !== strFilter);
    if (newFilters[0]) {
      setFiltersData(newFilters);
    } else {
      setFiltersData();
    }
  };
  return (
    <div>
      {" "}
      {filtersData ? (
        <div className="filters-container d-flex align-items-center ">
          <div className="filters d-flex flex-row flex-wrap gap-3">
            {filtersData.map((item, index) => {
              return (
                <div className="d-flex flex-row" key={index}>
                  <div className="single-filter">{item}</div>
                  <div className="close" onClick={() => deleteFilter(item)}>
                    <RiCloseLine className="cross" />
                  </div>
                </div>
              );
            })}
            <div className="clear-btn" onClick={() => setFiltersData()}>
              Clear
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Filters;
