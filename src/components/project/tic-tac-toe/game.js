import React, { useState, useEffect } from "react";
import Board from "./board";

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([{ squares }]);
  const [current, setCurrent] = useState(history[history.length - 1]);
  const [stepNumber, setStepNumber] = useState(0);

  const [xIsNext, setXIsNext] = useState(true);
  const [status, setStatus] = useState("X");

  useEffect(() => {
    const winner = calculateWinner(squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
    setStatus(status);
  }, [xIsNext, squares]);

  const handleClick = i => {
    const newHistory = history.slice(0, stepNumber + 1);
    const newCurrent = newHistory[newHistory.length - 1];
    const newSquares = newCurrent.squares.slice();

    if (calculateWinner(newSquares) || newSquares[i]) {
      return;
    }
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setHistory(newHistory.concat([{ squares: newSquares }]));
    setStepNumber(history.length);
    setCurrent({ squares: newSquares });
    setXIsNext(!xIsNext);
  };

  const jumpTo = step => {
    console.log(step);
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  // const [moves, setMoves] = useState(null);

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";

    return (
      <li key={move} className="text-left m-1">
        <button
          className="btn btn-warning px-1 py-0"
          onClick={() => jumpTo(move)}
        >
          {desc}
        </button>
      </li>
    );
  });

  return (
    <div id="tic-tac-toe" className="container text-center">
      <h1>Tic Tac Toe</h1>
      <div className="row m-3">
        <section className="col-6">
          <div className="border p-2 bg-light rounded">
            <Board squares={current.squares} onClick={i => handleClick(i)} />
          </div>
        </section>
        <section className="col-6">
          <div className="border p-2 h-100 bg-light rounded">
            <div className="row m-0">{status}</div>
            <ul className="row m-0 p-0 d-flex flex-column list-unstyled">
              {moves}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Game;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
