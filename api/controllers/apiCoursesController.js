// /api/controllers/apiCoursesController.js
const Course = require("../models/course");

const getCourses = async (req, res) => {
  try {
    const courses = await Course.find().exec();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving courses: " + error });
  }
};

const getCourseById = async (req, res) => {
  const courseId = req.params.id;

  try {
    const course = await Course.findById(courseId).exec();
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving course: " + error });
  }
};

module.exports = {
  getCourses,
  getCourseById,
};
