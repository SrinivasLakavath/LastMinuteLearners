"use strict";

// /api/routes/apiRoutes.js
var express = require("express");

var router = express.Router();

var apiCoursesController = require("../controllers/apiCoursesController"); // Routes for handling course-related API requests


router.get("/courses", apiCoursesController.getCourses); // Get all courses

router.get("/courses/:id", apiCoursesController.getCourseById); // Get a specific course by ID
// Route for handling review submissions (adding a review to a specific course)

router.post("/courses/:id/reviews", apiCoursesController.addReview); // Add a review to a specific course

module.exports = router;
//# sourceMappingURL=apiRoutes.dev.js.map
