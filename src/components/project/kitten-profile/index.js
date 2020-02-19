import React, { useState, useEffect } from "react";
import axios from "axios";
import SearchBox from "./searchBox";
import Kittens from "./kittens";

const KittenProfile = () => {
  const [kittens, setKittens] = useState([]);
  const [filteredKittens, setFilteredKittens] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const fetchKitten = () => {
      axios
        .get("https://api.myjson.com/bins/17rxds")
        .then(response => setKittens(response.data));
    };

    fetchKitten();
  }, []);

  useEffect(() => {
    const searchKittens = () => {
      const fKittens = kittens.filter(kitten =>
        kitten.name.toLowerCase().includes(searchField.toLowerCase())
      );

      setFilteredKittens(fKittens);
    };
    searchKittens();
  }, [searchField, kittens]);

  const handleSearchChange = e => {
    setSearchField(e.target.value);
  };

  return (
    <div className="container text-center">
      <h1>KITTEN PROFILE</h1>
      <SearchBox
        placeholder="Search kittens"
        handleChange={handleSearchChange}
      />
      <Kittens kittens={filteredKittens} />
    </div>
  );
};

export default KittenProfile;
