import React from "react";
import Kitten from "./kitten";

const Kittens = ({ kittens }) => {
  const renderKittens = () => {
    return (
      <div className="row ">
        {kittens.map(kitten => (
          <Kitten kitten={kitten} />
        ))}
      </div>
    );
  };

  return <div className="container text-center">{renderKittens()}</div>;
};

export default Kittens;
