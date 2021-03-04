import React, { useEffect, useState } from "react";
import "./App.css";

import Recipe from "./Recipe";

const App = () => {
  const [searchRecipe, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [find, setFind] = useState("");

  // API Credentials
  const APP_ID = "0859d2b7";
  const APP_KEY = "707e1baf58c8ff1b1943fee43286d1c5";

  const req = `https://api.edamam.com/search?q=${find}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [find]);

  const getRecipes = async () => {
    const response = await fetch(req);
    const data = await response.json();
    setRecipes(data.hits);
  };

  return (
    <div className="App">
      <form
        action=""
        className="search-form"
        onSubmit={(e) => {
          e.preventDefault();
          setFind(searchRecipe);
          setSearch("");
        }}
      >
        <input
          type="text"
          className="search-bar"
          value={searchRecipe}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button className="search-button">Search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
