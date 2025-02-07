const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Create the express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/registrationDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB...", err));

// Create a schema for users
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Create a schema for contact requests
const contactRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  recipeName: { type: String, required: true },
});

// Create models from the schemas
const User = mongoose.model("User", userSchema);
const ContactRequest = mongoose.model("ContactRequest", contactRequestSchema);

// Handle POST requests to register users
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  if (!username || !password) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }

  try {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Error registering user" });
  }
});

// Handle POST requests for contact requests
app.post("/contact", async (req, res) => {
  const { name, email, recipeName } = req.body;

  // Validate input
  if (!name || !email || !recipeName) {
    return res.status(400).json({ message: "Please fill out all fields" });
  }

  try {
    const newContactRequest = new ContactRequest({ name, email, recipeName });
    await newContactRequest.save();
    res.status(201).json({ message: "Contact request submitted successfully!" });
  } catch (error) {
    console.error("Error submitting contact request:", error);
    res.status(500).json({ message: "Error submitting contact request" });
  }
});

// Start the server
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
