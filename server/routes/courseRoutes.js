// /server/routes/courseRoutes.js
const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

// Routes for rendering views
router.get("/", courseController.getCourseListView); // Render the course list view
router.get("/:id", courseController.getCourseDetailsView); // Render course details view

// Route for posting reviews through views
router.post("/:id/reviews", courseController.addReviewView); // Add review from the course details view
module.exports = router;
