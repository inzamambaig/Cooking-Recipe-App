import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <>
      <h4>{title}</h4>
      <p className="calories">Total Calories: {Math.round(calories)}</p>
      <img src={image} alt="" />
      <ol>
        {ingredients.map((ingredient) => (
          <li key={Math.random().toString(36).substring(7)}>
            {ingredient.text}
          </li>
        ))}
      </ol>
    </>
  );
};

export default Recipe;
