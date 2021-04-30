import React from "react";
import "./kitten.css";

const Kitten = ({ kitten }) => {
  return (
    <div
      className="col-sm-6 col-md-4 col-lg-3 d-flex align-items-stretch p-1 kitten-container"
      index={kitten.id}
    >
      <div className=" w-100 p-1 border rounded kitten-wrapper">
        <img
          alt="kitten"
          src={`https://robohash.org/${kitten.name}?set=set4&size=150x150`}
        />
        <h3>{kitten.name}</h3>
        <p>{kitten.email}</p>
      </div>
    </div>
  );
};

export default Kitten;
