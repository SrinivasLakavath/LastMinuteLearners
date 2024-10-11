"use strict";

// /api/models/course.js
var mongoose = require("mongoose");

var reviewSchema = new mongoose.Schema({
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
    "default": Date.now // Set default timestamp to the current date

  }
});
var courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  // Duration of the course
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  // Course rating
  provider: {
    type: String,
    required: true
  },
  // Course provider
  link: {
    type: String,
    required: true
  },
  // Link to the course
  linkimg: {
    type: String,
    required: false
  },
  // Link to course image
  prerequisites: {
    type: String,
    required: false
  },
  // Prerequisites for the course
  paymentStatus: {
    type: String,
    "enum": ['Free', 'Paid'],
    required: true
  },
  // Payment status
  syllabus: {
    type: [String],
    required: false
  },
  // Array of syllabus topics
  level: {
    type: String,
    "enum": ['Beginner', 'Intermediate', 'Advanced'],
    required: true
  },
  // Course level
  reviews: [reviewSchema] // Array of reviews

});
var Course = mongoose.model("Course", courseSchema);
module.exports = Course;
//# sourceMappingURL=course.dev.js.map
