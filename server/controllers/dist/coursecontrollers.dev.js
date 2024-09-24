"use strict";

var Course = require("../api/models/course"); // Function to get the list of courses


var courseList = function courseList(req, res) {
  var courses;
  return regeneratorRuntime.async(function courseList$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Course.find().exec());

        case 3:
          courses = _context.sent;
          res.render("courseList", {
            courses: courses,
            title: "Courses"
          }); // Include title for the view

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).send("Error retrieving course list: " + _context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Function to get the details of a specific course


var courseDetail = function courseDetail(req, res) {
  var courseId, course;
  return regeneratorRuntime.async(function courseDetail$(_context2) {
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

          return _context2.abrupt("return", res.status(404).send("Course not found"));

        case 7:
          res.render("courseDetail", {
            course: course,
            title: "Course Details"
          }); // Include title for the view

          _context2.next = 13;
          break;

        case 10:
          _context2.prev = 10;
          _context2.t0 = _context2["catch"](1);
          res.status(500).send("Error retrieving course details: " + _context2.t0);

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 10]]);
};

module.exports = {
  courseList: courseList,
  courseDetail: courseDetail
};
//# sourceMappingURL=coursecontrollers.dev.js.map
