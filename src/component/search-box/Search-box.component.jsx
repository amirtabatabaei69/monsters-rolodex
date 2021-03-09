import React from "react";
import "./search-box.styles.css";

const SearchBox = ({ handler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder="search monsterss"
      onChange={handler}
    />
  );
};

export default SearchBox;
