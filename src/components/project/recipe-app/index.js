import React, { useState, useEffect } from "react";
import Recipe from "./recipe";
const RecipeApp = () => {
  const RECIPE_APP_ID = "5918e609";
  const RECIPE_APP_KEY = "9feab895801ae74b78ff96b7605b3be9";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("ice cream");

  useEffect(() => {
    const requestUrl = `https://api.edamam.com/search?q=${query}&app_id=${RECIPE_APP_ID}&app_key=${RECIPE_APP_KEY}`;

    const fetchRecipes = async () => {
      const response = await fetch(requestUrl);
      const data = await response.json();
      console.log(data);
      setRecipes(data.hits);
    };

    fetchRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const submitSearchQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div id="recipe-app" className="project-container">
      <h1 className="project-header">RECIPE FOR...{query.toUpperCase()}</h1>
      <div className="project-wrapper">
        <form onSubmit={submitSearchQuery} className="search-form">
          <input
            className="search-text"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="btn search-btn">
            Search
          </button>
        </form>
        <div className="recipe-container">
          {recipes.map((recipeItem, index) => (
            <Recipe
              key={index}
              title={recipeItem.recipe.label}
              calories={recipeItem.recipe.calories}
              image={recipeItem.recipe.image}
              externalUrl={recipeItem.recipe.url}
              ingredients={recipeItem.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeApp;
