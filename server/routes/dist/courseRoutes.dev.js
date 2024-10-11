"use strict";

// /server/routes/courseRoutes.js
var express = require("express");

var router = express.Router();

var courseController = require("../controllers/courseController"); // Routes for rendering views


router.get("/", courseController.getCourseListView); // Render the course list view

router.get("/:id", courseController.getCourseDetailsView); // Render course details view
// Route for posting reviews through views

router.post("/:id/reviews", courseController.addReviewView); // Add review from the course details view

module.exports = router;
//# sourceMappingURL=courseRoutes.dev.js.map
