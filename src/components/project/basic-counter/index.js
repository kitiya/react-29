import React, { useState } from "react";

const BasicCounter = () => {
  const [counter, setCounter] = useState(0);

  const Button = ({ clickAction, clickValue }) => {
    return (
      <button
        className="btn btn-primary"
        onClick={() => clickAction(clickValue)}
      >
        +{clickValue}
      </button>
    );
  };

  const incrementCounter = increment => {
    setCounter(counter + increment);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <main id="basic-counter" className="project-container">
      <h1 className="project-header">Basic Counter</h1>
      <section className="project-wrapper">
        <div className="btn-wrapper">
          <Button clickAction={incrementCounter} clickValue={1}></Button>
          <Button clickAction={incrementCounter} clickValue={5}></Button>
          <Button clickAction={incrementCounter} clickValue={10}></Button>
          <Button clickAction={incrementCounter} clickValue={100}></Button>
        </div>
        <lable>{counter}</lable>
        <button className="btn" onClick={() => handleReset(10)}>
          Reset
        </button>
      </section>
    </main>
  );
};

export default BasicCounter;
