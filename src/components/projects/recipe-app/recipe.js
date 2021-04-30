import React from "react";

const Ingredients = ({ ingredient }) => {
  return (
    <ul className="list-group text-left border-0 m-0">
      <li className="list-group-item border-0 mx-2 my-1 p-0 pl-3">
        {ingredient.text}
      </li>
    </ul>
  );
};
const Recipe = ({ title, calories, image, externalUrl, ingredients }) => {
  return (
    <div className="col col-md-6 col-lg-4 text-center mx-0 my-3 p-0 d-flex align-items-stretch recipe-wrapper">
      <div className="mx-1 border rounded w-100">
        <h5 className="text-center p-2 bg-light overflow-hidden">{title}</h5>
        <div className="row justify-content-center">
          <a
            className="recipe-link"
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="round" alt="recipe" src={image} secure="true" />
          </a>
        </div>
        <p className="row text-left m-2 pl-3">
          Calories: {calories.toFixed(0)}
        </p>

        {ingredients.map((ingredient, index) => (
          <Ingredients key={index} ingredient={ingredient} />
        ))}
      </div>
    </div>
  );
};

export default Recipe;
