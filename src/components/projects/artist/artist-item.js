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
      <div className="artist-album-container">
        {albums.map(item => {
          return (
            <div className="artist-album-wrapper" key={item.albumId}>
              <h3 className="album-title">{item.title}</h3>
              <img
                alt="album"
                className="album-image"
                src={`/images/artist/albums/${item.cover}.jpg`}
              />
              {/* <p className="album-price">${item.price} | {item.year}</p> */}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div id="artist-item" className="project-container">
      <h1 className="project-header">{artist.name}</h1>
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
