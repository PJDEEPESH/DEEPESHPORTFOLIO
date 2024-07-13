const mongoose = require('mongoose');

// Connection Establishment (with Retry)
const mongoURI = "mongodb://localhost:27017/portfolio"; 
const connectWithRetry = () => {
  mongoose.connect(mongoURI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    serverSelectionTimeoutMS: 5000, // Optional, adjust as needed
  })
    .then(() => console.log('Database connected'))
    .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
      setTimeout(connectWithRetry, 5000); // Retry after 5 seconds
    });
};
connectWithRetry(); // Initial connection attempt

// Schema Definition (with Additional Properties)
const mongoSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { 
    type: String, 
    required: true, 
    unique: true, // Ensure emails are unique
    trim: true,  // Remove leading/trailing whitespace
    lowercase: true, // Store emails in lowercase for easier comparison
    validate: {
      validator: (value) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); // Basic email validation
      },
      message: 'Invalid email format'
    }
  },
  description: { type: String, required: true, trim: true },
  createdAt: { type: Date, default: Date.now } // Timestamp for creation
});

// Model Creation
const Collection = mongoose.model('Portfolio', mongoSchema);

module.exports = Collection;
