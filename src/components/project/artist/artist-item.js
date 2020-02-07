import React from "react";
import ArtistsDB from "./artist-db";
const ArtistItem = props => {
  const id = props.match.params.id;

  const matchedArtist = ArtistsDB.artists.filter(item => {
    return item.id === Number(id);
  });
  const artist = matchedArtist[0];

  const AlbumList = ({ albums }) => {
    return (
      <section className="artist-album-container">
        {albums.map(item => {
          return (
            <div className="artist-album-wrapper" key={item.albumId}>
              <h2 className="album-title">{item.title}</h2>
              <img
                alt="album"
                className="album-image"
                src={`/images/artist/albums/${item.cover}.jpg`}
              />
              {/* <p className="album-price">${item.price} | {item.year}</p> */}
            </div>
          );
        })}
      </section>
    );
  };

  return (
    <div id="artist-item">
      <h1>{artist.name}</h1>
      <section className="artist-bio-wrapper">
        <img
          className="artist-image"
          src={`/images/artist/covers/${artist.cover}.jpg`}
          alt="artist"
        />
        <p className="artist-bio">{artist.bio}</p>
      </section>
      <AlbumList albums={artist.albums} />
    </div>
  );
};

export default ArtistItem;
