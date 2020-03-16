import React, { useState } from "react";
import CharPicker from "./char-picker";
import Character from "./character";

const StarWarsApi = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(1);
  const [choosenSide, setChoosenSide] = useState("light");
  const [destroyed, setDestroyed] = useState(false);

  const sideHandler = side => {
    setChoosenSide(side);
  };

  const charSelectHandler = event => {
    const charId = event.target.value;
    setSelectedCharacter(charId);
  };

  const destructionHandler = () => {
    setDestroyed(true);
  };

  let content = (
    <div className="container">
      <h1>Star wars api</h1>
      <CharPicker
        className="char-picker"
        side={choosenSide}
        selectedChar={selectedCharacter}
        onCharSelect={charSelectHandler}
      ></CharPicker>
      <Character
        className="character"
        selectedChar={selectedCharacter}
      ></Character>

      <button onClick={() => sideHandler("light")}>Light Side</button>
      <button onClick={() => sideHandler("dark")}>Dark Side</button>
      {choosenSide === "dark" && (
        <button onClick={destructionHandler}>DESTROY!</button>
      )}
    </div>
  );

  if (destroyed) {
    content = <h1 className="container">Total destruction!</h1>;
  }
  return content;
};

export default StarWarsApi;

// Resource: https://github.com/academind/react-hooks-introduction/tree/custom-hooks
