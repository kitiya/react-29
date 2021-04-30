import React from "react";

const Summary = props => {
  let content = null;
  if (!props) {
    content = <p>Loading Character</p>;
  } else {
    content = (
      <div className="summary">
        <h1>{props.name}</h1>
        <p>
          Gender: <span className="summary__output">{props.gender}</span>
        </p>
        <p>
          Height: <span className="summary__output">{props.height}</span>
        </p>
        <p>
          Hair Color / Skin Color:{" "}
          <span className="summary__output">{props.hairColor}</span> /{" "}
          <span className="summary__output">{props.skinColor}</span>
        </p>
        <p>
          Appears in # Movies:{" "}
          <span className="summary__output">{props.movieCount}</span>
        </p>
      </div>
    );
  }
  return content;
};

export default Summary;
