import React from "react";
import Search from "./Search";

const FilterPanel = (props) => {
  return (
    <div className="filter-panel">
      <div className="search-filters">
        {/* <p className="caption-strong">Search for a trip</p> */}
        <Search
          updateSearchText={props.updateSearchText}
          query={props.query}
          executeSearch={props.executeSearch}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
