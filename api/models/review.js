// /api/models/review.js
const mongoose = require('mongoose');

// Define the Review schema
const reviewSchema = new mongoose.Schema({
  author: { 
    type: String, 
    required: true 
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 0, 
    max: 5 // Assuming ratings are on a scale from 0 to 5
  },
  reviewText: { 
    type: String, 
    required: true 
  },
  timestamp: { 
    type: Date, 
    default: Date.now // Set default timestamp to the current date
  }
});

// Create and export the Review model
module.exports = mongoose.model('Review', reviewSchema);