import React from "react";

const Ingredients = ({ ingredient }) => {
  return (
    <ul className="ingredient-wrapper">
      <li className="ingredient-item">{ingredient.text}</li>
    </ul>
  );
};
const Recipe = ({ title, calories, image, externalUrl, ingredients }) => {
  return (
    <div className="recipe-item-wrapper">
      <h3 className="recipe-item-header">{title}</h3>
      <a
        className="recipe-link"
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img className="recipe-image" alt="recipe" src={image} />
      </a>
      <p className="recipe-calories">Calories: {calories.toFixed(0)}</p>

      {ingredients.map((ingredient, index) => (
        <Ingredients key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default Recipe;
