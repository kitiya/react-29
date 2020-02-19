import React from "react";

const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <div className="form-group p-1">
      <input
        className="form-control"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;
