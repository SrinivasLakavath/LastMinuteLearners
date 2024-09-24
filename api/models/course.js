// /api/models/course.js 
const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: String, required: true }, // New field
  rating: { type: Number, required: true }, // New field
  provider: { type: String, required: true }, // New field
  link: { type: String, required: true }, 
  linkimg: { type: String, required: false }, // New field for course link
  reviews: [
    {
      author: { type: String, required: true },
      rating: { type: Number, required: true },
      reviewText: { type: String, required: true },
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;