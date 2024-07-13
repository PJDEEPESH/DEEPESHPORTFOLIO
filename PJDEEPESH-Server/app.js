const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const database = require('./mongo'); // Your mongo.js module

const app = express();
const port = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: "Server responded" });
});

// Get all connections
app.get('/portfolio/connections', async (req, res) => {
  try {
    const allUsersData = await database.find(); // No need to pass empty {}
    res.status(200).json(allUsersData); // Explicitly set 200 status on success
  } catch (error) {
    console.error("Error fetching connections:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new connection
app.post('/portfolio/connections', async (req, res) => {
  const postData = req.body;
  try {
    const newConnection = await database.create(postData);
    res.status(201).json({ message: "Posted Successfully", data: newConnection });
  } catch (error) {
    console.error("Error creating connection:", error);
    if (error.name === 'ValidationError') { // Mongoose validation error
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal server error" });
    }
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
