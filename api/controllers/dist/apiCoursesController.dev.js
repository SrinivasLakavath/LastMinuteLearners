"use strict";

// /api/controllers/apiCoursesController.js
var Course = require("../models/course");

var getCourses = function getCourses(req, res) {
  var courses;
  return regeneratorRuntime.async(function getCourses$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Course.find().exec());

        case 3:
          courses = _context.sent;
          res.json(courses);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Error retrieving courses: " + _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var getCourseById = function getCourseById(req, res) {
  var courseId, course;
  return regeneratorRuntime.async(function getCourseById$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          courseId = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Course.findById(courseId).exec());

        case 4:
          course = _context2.sent;

          if (course) {
            _context2.next = 7;
            break;
          }

          return _context2.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));

        case 7:
          res.json(course);
          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: "Error retrieving course: " + _context2.t0
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

module.exports = {
  getCourses: getCourses,
  getCourseById: getCourseById
};
//# sourceMappingURL=apiCoursesController.dev.js.map
