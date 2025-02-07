import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { recipes } from "../data";
import "./../styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  const [showInstructions, setShowInstructions] = useState(false);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.name}</h2>

      <h4>Ingredients:</h4>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>

      {/* Button to toggle instructions */}
      <button 
        className="toggle-instructions-btn" 
        onClick={() => setShowInstructions(!showInstructions)}
      >
        {showInstructions ? "Hide Instructions" : "How to Make"}
      </button>

      {/* Conditionally render the instructions */}
      {showInstructions && (
        <div>
          <h4>How to Make:</h4>
          <p className="recipe-description">{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
