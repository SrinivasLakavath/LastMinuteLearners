"use strict";

var Course = require("../../api/models/course"); // Adjust the path as necessary
// Function to get a list of courses (API)


exports.getCourseList = function _callee(req, res) {
  var courses;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Course.find());

        case 3:
          courses = _context.sent;
          // Fetch all courses
          res.json(courses); // Return JSON response

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Error fetching courses",
            error: _context.t0
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Function to render course list view


exports.getCourseListView = function _callee2(req, res) {
  var courses;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Course.find());

        case 3:
          courses = _context2.sent;
          // Fetch all courses
          res.render("courseList", {
            courses: courses
          }); // Render course list view

          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).send("Error retrieving courses: " + _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Function to get a specific course (API)


exports.getCourseDetails = function _callee3(req, res) {
  var course;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Course.findById(req.params.id));

        case 3:
          course = _context3.sent;

          if (course) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: "Course not found"
          }));

        case 6:
          res.json(course); // Return JSON response

          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Error fetching course",
            error: _context3.t0
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; // Function to render specific course details view


exports.getCourseDetailsView = function _callee4(req, res) {
  var course;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Course.findById(req.params.id));

        case 3:
          course = _context4.sent;

          if (course) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).send("Course not found"));

        case 6:
          res.render("courseDetails", {
            course: course
          }); // Render course details view

          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(500).send("Error retrieving course: " + _context4.t0);

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
};
//# sourceMappingURL=courseController.dev.js.map
