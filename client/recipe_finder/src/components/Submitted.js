import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Submitted.css";

const Submitted = () => {
  const [submissions, setSubmissions] = useState([]);
  const navigate = useNavigate();

  // Fetch all submissions from localStorage when the component mounts
  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem("submissions")) || [];
    setSubmissions(storedSubmissions);
  }, []);

  return (
    <div className="submitted">
      <div className="submitted-card">
        <h2>All Submissions</h2>
        {submissions.length > 0 ? (
          <div className="submission-list">
            {submissions.map((submission, index) => (
              <div key={index} className="submission-item">
                <p><strong>Name:</strong> {submission.name}</p>
                <p><strong>Email:</strong> {submission.email}</p>
                <p><strong>Recipe Name:</strong> {submission.recipeName}</p>
                <hr /> {/* Line to separate submissions */}
              </div>
            ))}
          </div>
        ) : (
          <p>No submissions found.</p>
        )}
        <button onClick={() => navigate("/")}>Go to Home</button>
      </div>
    </div>
  );
};

export default Submitted;
