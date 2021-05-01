import React from "react";
import { Link } from "react-router-dom";
import ArtistDB from "./artist-db";

const artistList = (artists) => {
  return artists
    ? artists.map((item) => (
        <Link
          key={item.id}
          to={`/projects/artists/${item.id}`}
          className="profile-image"
          style={{
            background: `url('../images/artist/covers/${item.cover}.jpg') no-repeat`,
            backgroundSize: "cover",
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
    <div id="artists" className="project-container">
      <div className="banner-image"></div>
      <h1 className="project-header">Browse the artists</h1>
      <div className="artists-list-wrapper">{artistList(artists)}</div>
    </div>
  );
};

export default Artists;
