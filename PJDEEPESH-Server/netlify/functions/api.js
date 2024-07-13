const mongoose = require('mongoose');
const Collection = require('../../src/mongo'); // Adjust the path to your mongo.js file

const mongoURI = 'mongodb://localhost:27017/portfolio';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the Netlify Function handler
const handler = async (event) => {
  if (event.httpMethod === 'GET') {
    try {
      const allUsersData = await Collection.find();
      return {
        statusCode: 200,
        body: JSON.stringify(allUsersData),
      };
    } catch (error) {
      console.error("Error fetching data:", error);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: "Internal server error" }),
      };
    }
  }

  if (event.httpMethod === 'POST') {
    try {
      const postData = JSON.parse(event.body);
      const newConnection = await Collection.create(postData);
      return {
        statusCode: 201,
        body: JSON.stringify({ message: "Posted Successfully", data: newConnection }),
      };
    } catch (error) {
      console.error("Error creating connection:", error);
      if (error.name === 'ValidationError') {
        return {
          statusCode: 400,
          body: JSON.stringify({ error: error.message }),
        };
      } else {
        return {
          statusCode: 500,
          body: JSON.stringify({ error: "Internal server error" }),
        };
      }
    }
  }

  return {
    statusCode: 405,
    body: JSON.stringify({ error: "Method not allowed" }),
  };
};

module.exports = { handler };
