import React from "react";
import ArtistsDB from "./artist-db";
const ArtistItem = props => {
  const id = props.match.params.id;

  const artists = ArtistsDB.artists;
  const artist = artists.filter(item => {
    return item.id === Number(id);
  });

  return <h1>{artist[0].name}</h1>;
};

export default ArtistItem;
