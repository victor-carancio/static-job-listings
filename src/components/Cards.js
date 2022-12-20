import React from "react";
import { useGlobalContext } from "../context/context";
import Card from "./Card";

const Cards = () => {
  const { data, filtersData } = useGlobalContext();

  const applyFilters = () => {
    const returnFilters = data.map((item) => {
      const { tools, role, level, languages } = item;
      const allFilters = tools.concat(languages);
      allFilters.unshift(role, level);

      const newData = allFilters.filter((data, index) => {
        const currFilter = filtersData.find((filter) => data === filter);
        return currFilter;
      });

      if (newData.length !== 0) {
        return <Card key={item.id} {...item} />;
      }
    });
    return returnFilters;
  };

  return (
    <div className="cards-container mb-5">
      <div className="d-flex flex-column flex-nowrap gap-5">
        {filtersData
          ? applyFilters()
          : data.map((item) => {
              return <Card key={item.id} {...item} />;
            })}
      </div>
    </div>
  );
};

export default Cards;
