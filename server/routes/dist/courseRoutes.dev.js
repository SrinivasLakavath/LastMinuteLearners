"use strict";

var express = require("express");

var router = express.Router();

var ctrlCourses = require("../controllers/courseController"); // Define routes for courses


router.get("/", ctrlCourses.getCourseListView); // Render view for listing all courses

router.get("/:id", ctrlCourses.getCourseDetailsView); // Render view for a specific course by ID

module.exports = router;
//# sourceMappingURL=courseRoutes.dev.js.map
