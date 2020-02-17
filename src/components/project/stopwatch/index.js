import React, { useState } from "react";

const Stopwatch = () => {
  const [lapse, setLapse] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  const handleRunClick = () => {
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
    <main id="stopwatch" className="container text-center mt-3">
      <h1 className="text-dark">Stopwatch</h1>
      <section className="row justify-content-center m-3">
        <label>{lapse} s</label>
      </section>
      <section className="row justify-content-center m-3">
        <button className="btn btn-info m-1 col-2" onClick={handleRunClick}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="btn btn-success m-1 col-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
      </section>
    </main>
  );
};

export default Stopwatch;
