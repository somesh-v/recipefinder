import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Register.css";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Input validation
    if (!username.trim() || !password.trim()) {
      setMessage("Both fields are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful!");
        navigate("/search"); // Redirect immediately
      } else {
        setMessage(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      setMessage("Error registering user");
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Done</button>
      </form>
      {message && <p className={`message ${message.includes("successful") ? "success" : "error"}`}>
        {message}
      </p>}
    </div>
  );
};

export default Register;
