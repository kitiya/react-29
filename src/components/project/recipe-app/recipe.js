import React from "react";

const Ingredients = ({ ingredient }) => {
  return (
    <ul>
      <li>{ingredient.text}</li>
    </ul>
  );
};
const Recipe = ({ title, calories, image, externalUrl, ingredients }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{calories.toFixed(0)}</p>
      <a href={externalUrl} target="_blank" rel="noopener noreferrer">
        <img alt="recipe" src={image} />
      </a>

      {ingredients.map((ingredient, index) => (
        <Ingredients key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Recipe;
