import React from "react";

const Stopwatch = () => {
  return (
    <main className="project-container">
      <h1>Stopwatch</h1>
      <section className="stopwatch-wrapper">
        <label>0ms</label>
        <button>Start</button>
        <button>Clear</button>
      </section>
    </main>
  );
};

export default Stopwatch;
