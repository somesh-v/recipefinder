import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import SearchList from "./components/SearchList";
import Favorites from "./components/Favorites";
import RecipeDetails from "./components/RecipeDetails";
import Register from "./components/Register";
import Contact from "./components/Contact"; 
import Submitted from "./components/Submitted";  // Import Submitted component

import "./App.css";

const App = () => {
  const [favorites, setFavorites] = useState([]);

  // Function to add a recipe to favorites
  const addFavorite = (recipe) => {
    setFavorites([...favorites, recipe]);
  };

  // Function to remove a recipe from favorites
  const removeFavorite = (recipe) => {
    setFavorites(favorites.filter((fav) => fav.id !== recipe.id));
  };

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Register Route */}
          <Route path="/register" element={<Register />} />

          {/* SearchList Route */}
          <Route
            path="/search"
            element={
              <SearchList
                favorites={favorites}
                onAddFavorite={addFavorite}
                onRemoveFavorite={removeFavorite}
              />
            }
          />

          {/* Favorites Route */}
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onRemoveFavorite={removeFavorite}
              />
            }
          />

          {/* Recipe Details Route */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />

          {/* Submitted Route */}
          <Route path="/submitted" element={<Submitted />} /> {/* Add Submitted route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
