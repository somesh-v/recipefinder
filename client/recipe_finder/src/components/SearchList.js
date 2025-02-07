import React, { useState } from "react";
import { recipes } from "../data"; // Assume recipes data contains category info
import RecipeCard from "./RecipeCard";
import "./../styles/SearchList.css";

const SearchList = ({ favorites, onAddFavorite, onRemoveFavorite }) => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories could be extracted dynamically from the data, here they are hardcoded for simplicity
  const categories = ["All", "Salad", "Soup", "Noodle", "Pasta"];

  // Filter the recipes based on the search query and selected category
  const filteredRecipes = recipes.filter((recipe) => {
    const matchesQuery = recipe.name.toLowerCase().includes(query.toLowerCase());
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="search-list">
      <h2>Search Recipes</h2>
      {/* Category selection dropdown */}
      <div className="category-filter">
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {/* Display the filtered recipes */}
      <div className="recipe-cards">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              onAddFavorite={onAddFavorite}
              onRemoveFavorite={onRemoveFavorite}
              isFavorite={favorites.some((fav) => fav.id === recipe.id)}
            />
          ))
        ) : (
          <p>No recipes found matching your search or category.</p>
        )}
      </div>
    </div>
  );
};

export default SearchList;
