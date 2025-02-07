// src/components/Favorites.js
import React from "react";
import RecipeCard from "./RecipeCard";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./../styles/Favorites.css";

const Favorites = ({ favorites, onRemoveFavorite }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="favorites">
      <h2>Your Favorite Recipes</h2>
      <div className="recipe-cards">
        {favorites.length > 0 ? (
          favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onRemoveFavorite={onRemoveFavorite}
              isFavorite={true}
            />
          ))
        ) : (
          <p>No favorite recipes yet.</p>
        )}
      </div>
      <button onClick={() => navigate("/contact")}>Request a New Recipe</button> {/* Button to navigate */}
    </div>
  );
};

export default Favorites;
