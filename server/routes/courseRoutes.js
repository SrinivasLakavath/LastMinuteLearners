const express = require("express");
const router = express.Router();
const ctrlCourses = require("../controllers/courseController");

// Define routes for courses
router.get("/", ctrlCourses.getCourseListView); // Render view for listing all courses
router.get("/:id", ctrlCourses.getCourseDetailsView); // Render view for a specific course by ID

module.exports = router;
