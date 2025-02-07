import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Home.css";

const Home = () => {
  const navigate = useNavigate(); // Use navigate for routing

  return (
    <div className="home">
      <h2>Welcome to Recipe Finder</h2>
      <p>Search for your favorite recipes and add them to your favorites list!</p>
      <button onClick={() => navigate("/register")}>Register</button>
    </div>
  );
};

export default Home;
