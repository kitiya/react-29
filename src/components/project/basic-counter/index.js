import React, { useState } from "react";

const BasicCounter = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrementClick = increment => {
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
          <button className="btn" onClick={() => handleIncrementClick(1)}>
            +1
          </button>
          <button className="btn" onClick={() => handleIncrementClick(5)}>
            +5
          </button>
          <button className="btn" onClick={() => handleIncrementClick(10)}>
            +10
          </button>
          <button className="btn" onClick={() => handleIncrementClick(100)}>
            +100
          </button>
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
