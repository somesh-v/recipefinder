import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [recipeName, setRecipeName] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create submission object
    const submission = { name, email, recipeName };

    // Store the new submission in localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
    const updatedSubmissions = [...existingSubmissions, submission];
    localStorage.setItem("submissions", JSON.stringify(updatedSubmissions));

    // Send data to the backend server
    try {
      const response = await fetch("http://localhost:5001/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submission),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("Request submitted successfully!");

        // Redirect to the submitted page after successful submission
        setTimeout(() => {
          navigate("/submitted", {
            state: { name, email, recipeName },
          });
        }, 1000);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("Error submitting request");
    }
  };

  return (
    <div className="contact">
      <h2>Request a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Recipe Name:</label>
          <input
            type="text"
            value={recipeName}
            onChange={(e) => setRecipeName(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact;
