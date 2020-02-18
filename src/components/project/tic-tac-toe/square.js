import React from "react";

const Square = props => {
  return (
    <div className="col-4 m-0 p-1">
      <button
        className="bg-info text-light rounded px-2 py-2 w-100 square-button"
        onClick={props.onClick}
      >
        {props.value}
      </button>
    </div>
  );
};

export default Square;
