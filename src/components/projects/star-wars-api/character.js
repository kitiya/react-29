import React from "react";
import { useHttp } from "./hooks/http";
import Summary from "./summary";

const Character = ({ selectedChar }) => {
  // const [loadedCharacter, setLoadedCharacter] = useState({});
  // const [isLoading, setIsLoading] = useState(false);

  const [isLoading, fetchData] = useHttp(
    "https://swapi.co/api/people/" + selectedChar,
    [selectedChar]
  );

  let loadedCharacter = null;
  if (fetchData) {
    loadedCharacter = {
      id: selectedChar,
      name: fetchData.name,
      height: fetchData.height,
      colors: {
        hair: fetchData.hair_color,
        skin: fetchData.skin_color
      },
      gender: fetchData.gender,
      movieCount: fetchData.films.length
    };
  }
  // setLoadedCharacter();

  // const fetchData = () => {
  //   console.log(
  //     "Sending Http request for new character with id " + selectedChar
  //   );

  //   setIsLoading(true);
  //   fetch("https://swapi.co/api/people/" + selectedChar)
  //     .then(response => {
  //       console.log(response);
  //       if (!response.ok) {
  //         throw new Error("Could not fetch character!");
  //       }
  //       return response.json();
  //     })
  //     .then(charData => {
  //       setLoadedCharacter({
  //         id: selectedChar,
  //         name: charData.name,
  //         height: charData.height,
  //         colors: {
  //           hair: charData.hair_color,
  //           skin: charData.skin_color
  //         },
  //         gender: charData.gender,
  //         movieCount: charData.films.length
  //       });

  //       setIsLoading(false);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [selectedChar]);

  let content = <p>loading Character...</p>;
  if (!isLoading && loadedCharacter) {
    content = (
      <Summary
        name={loadedCharacter.name}
        gender={loadedCharacter.gender}
        height={loadedCharacter.height}
        hairColor={loadedCharacter.colors.hair}
        skinColor={loadedCharacter.colors.skin}
        movieCount={loadedCharacter.movieCount}
      ></Summary>
    );
  } else if (!isLoading && !loadedCharacter) {
    content = <p>Failed to fetch character.</p>;
  }

  return content;
};

export default Character;
