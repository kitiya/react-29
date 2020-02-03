import React, { useState, useEffect } from "react";

const Stopwatch = () => {
  const [lapse, setLapse] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleRunClick = () => {
    const startTime = Date.now() - lapse;

    if (isRunning) {
      clearInterval(timer);
    } else {
      const startTime = Date.now() - lapse;

      setTimer(
        setInterval(() => {
          setLapse(
            ((Date.now() - startTime + Number(lapse * 1000)) / 1000).toFixed(1)
          );
        })
      );
    }
    console.log(timer);
    setIsRunning(!isRunning);
  };

  const handleClearClick = () => {
    clearInterval(timer);
    setLapse(0);
    setIsRunning(false);
  };

  return (
    <main id="stopwatch" className="project-container">
      <h1 className="project-header">Stopwatch</h1>
      <section className="project-wrapper">
        <label>{lapse} s</label>
        <div className="btn-wrapper">
          <button onClick={handleRunClick}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button onClick={handleClearClick}>Clear</button>
        </div>
      </section>
    </main>
  );
};

export default Stopwatch;
