"use strict";

var express = require("express");

var router = express.Router();

var ctrlCourses = require("../controllers/courseController");

var reviewController = require("../controllers/reviewController"); // Define API routes for courses


router.get("/courses", ctrlCourses.getCourseList); // List all courses

router.get("/courses/:id", ctrlCourses.getCourseDetails); // Get a specific course by ID
// Define API routes for reviews

router.post("/courses/:id/reviews", reviewController.addReview); // Add a review for a specific course

router.get("/courses/:id/reviews", reviewController.reviewList); // Get all reviews for a specific course

module.exports = router;
//# sourceMappingURL=apiRoutes.dev.js.map
