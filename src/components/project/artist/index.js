import React from "react";
import { Link } from "react-router-dom";
import ArtistDB from "./artist-db";

const artistList = artists => {
  return artists
    ? artists.map(item => (
        <Link
          key={item.id}
          to={`/project/artists/${item.id}`}
          className="profile-image"
          style={{
            background: `url('/images/artist/covers/${item.cover}.jpg') no-repeat`
          }}
        >
          <div className="profile-image-header-wrapper">
            <h2 className="profile-image-header">{item.name}</h2>
          </div>
        </Link>
      ))
    : null;
};

const Artists = () => {
  const artists = ArtistDB.artists;

  return (
    <div id="artists">
      <div>
        <div className="banner-image"></div>
        <h1>Browse the artists</h1>{" "}
      </div>
      <div className="artists-list-wrapper">{artistList(artists)}</div>
    </div>
  );
};

export default Artists;
