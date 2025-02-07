import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/RecipeCard.css";

const RecipeCard = ({ recipe, onAddFavorite, onRemoveFavorite, isFavorite }) => {
  const navigate = useNavigate();

  // Function to navigate to the ingredients page
  const goToIngredients = () => {
    navigate(`/recipe/${recipe.id}`);
  };

  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" /> 
      <div className="card-buttons">
        {/* Button for Ingredients */}
        <button className="ingredients-btn" onClick={goToIngredients}>
          View Ingredients
        </button>

        {/* Button for Adding/Removing from Favorites */}
        <button
          className="favorite-btn"
          onClick={() => (isFavorite ? onRemoveFavorite(recipe) : onAddFavorite(recipe))}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;

