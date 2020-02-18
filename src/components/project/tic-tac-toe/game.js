import React from "react";
import Board from "./board";

const Game = () => {
  return (
    <div id="tic-tac-toe" className="container text-center">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  );
};
// const Game = () => {
//   const [squares, setSquare] = useState(Array(9).fill(null));
//   const [history, setHistory] = useState([{ squares }]);
//   return (
//     <div id="tic-tac-toe" className="container text-center">
//       <h1>Tic Tac Toe</h1>
//       <div className="row">
//         <section className="col-6 ">
//           <div className="border p-2 bg-light rounded">
//             <Board />
//           </div>
//         </section>
//         <section className="col-6">
//           <div className="border p-2 bg-light rounded">
//             <div className="row m-0">Status</div>
//             <div className="row m-0">TODO</div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

export default Game;
