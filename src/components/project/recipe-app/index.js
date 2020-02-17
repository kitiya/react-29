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
    <div id="recipe-app" className="container mt-3">
      <h1>RECIPE FOR...{query.toUpperCase()}</h1>
      <form onSubmit={submitSearchQuery}>
        <div className="from-group row m-0">
          <input
            className="form-control col"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button type="submit" className="btn btn-info col-2 ml-1">
            Search
          </button>
        </div>
      </form>
      <section className="row m-0 justify-content-around">
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
      </section>
    </div>
  );
};

export default RecipeApp;
