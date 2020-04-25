import React from "react";

const Search = (props) => {
  const { handleChange } = props;
  return (
    <input
      className="Search"
      type="text"
      placeholder="🔍 Search Again"
      onChange={handleChange}
    ></input>
  );
};
export default Search;
