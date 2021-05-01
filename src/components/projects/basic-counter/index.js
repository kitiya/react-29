import React, { useState } from "react";

const BasicCounter = () => {
  const [counter, setCounter] = useState(0);

  const Button = ({ clickAction, clickValue }) => {
    return (
      <button
        className="btn btn-info col-4 col-md-2 m-1"
        onClick={() => clickAction(clickValue)}
      >
        +{clickValue}
      </button>
    );
  };

  const incrementCounter = (increment) => {
    setCounter(counter + increment);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <main id="basic-counter" className="container">
      <h1 className="text-center">Basic Counter</h1>
      <div className="container text-center p-3">
        <section className="row justify-content-center ml-3 mr-3 ">
          <Button clickAction={incrementCounter} clickValue={1}></Button>
          <Button clickAction={incrementCounter} clickValue={5}></Button>
          <Button clickAction={incrementCounter} clickValue={10}></Button>
          <Button clickAction={incrementCounter} clickValue={100}></Button>
        </section>
        <section className="row justify-content-center m-3">
          <label className="text-dark m-0">{counter}</label>
        </section>
        <section className="row justify-content-center">
          <button
            className="btn btn-success col-3"
            onClick={() => handleReset(10)}
          >
            Reset
          </button>
        </section>
      </div>
    </main>
  );
};

export default BasicCounter;
