import React from "react";
/* import logo from "../Assets/photosnap.svg"; */
import dot from "../Assets/dot.svg";
import { useGlobalContext } from "../context/context";

const Card = ({
  id,
  logo,
  company,
  newOne,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
}) => {
  const { filtersData, setFiltersData } = useGlobalContext();
  const allFilters = tools.concat(languages);
  allFilters.unshift(role, level);

  const addFilter = (strFilter) => {
    if (!filtersData) {
      setFiltersData([strFilter]);
    } else {
      const newFilters = [...filtersData, strFilter];
      const finalFilters = newFilters.reduce((acc, item) => {
        if (!acc.includes(item)) {
          acc.push(item);
        }
        return acc;
      }, []);
      setFiltersData(finalFilters);
    }
  };
  return (
    <div className="card-container ">
      <div className="card-row row d-flex justify-content-between rounded  ">
        <div className="col-lg-6 p-0 ">
          <div className=" info-container d-flex align-items-center justify-content-center justify-lg-content-start  h-100 h-lg-50">
            <div className="info-img d-flex justify-content-center w-50">
              <img src={logo} alt={`${company}-logo`} />
            </div>
            <div className="d-flex flex-column justify-content-center gap-2 w-50">
              <div className="header d-flex flex-row gap-2">
                <div className="margin-p company-name">{company}</div>
                {newOne ? <p className="new-job margin-p ">NEW!</p> : ""}
                {featured ? (
                  <p className="featured-job margin-p ">FEATURED</p>
                ) : (
                  ""
                )}
              </div>
              <div className="position-name">
                <p className="position-title">{position}</p>
              </div>
              <div className="info-job d-flex flex-row justify-content-between align-items-center h-10">
                <p className="margin-p">{postedAt}</p>
                <img src={dot} alt="" />
                <p className="margin-p">{contract}</p>
                <img src={dot} alt="" />
                <p className="margin-p">{location}</p>
              </div>
            </div>
            <div className="separator"></div>
          </div>
        </div>
        <div className="col-lg-6 p-0">
          <div className=" d-flex flex-wrap justify-content-center  align-items-center h-100 gap-3 h-100 ">
            {allFilters.map((item, index) => {
              return (
                <div
                  className="filter"
                  key={index}
                  onClick={() => addFilter(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
