import React from "react";
import { Link } from "react-router-dom";

const Game = () => {
  return (
    <main id="game" className="container text-center">
      <h1 className="main-container-header">My gaming projects...</h1>

      <div className="mt-3 btn btn-info">
        <Link to="/project/tic-tac-toe">
          <h2 className="text-light p-3">Tic Tac Toe</h2>
        </Link>
      </div>
    </main>
  );
};

export default Game;
