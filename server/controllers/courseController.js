const Course = require("../../api/models/course"); // Adjust the path as necessary

// Function to get a list of courses (API)
exports.getCourseList = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.json(courses); // Return JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses", error });
  }
};

// Function to render course list view
exports.getCourseListView = async (req, res) => {
  try {
    const courses = await Course.find(); // Fetch all courses
    res.render("courseList", { courses }); // Render course list view
  } catch (error) {
    res.status(500).send("Error retrieving courses: " + error);
  }
};

// Function to get a specific course (API)
exports.getCourseDetails = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ message: "Course not found" });
    res.json(course); // Return JSON response
  } catch (error) {
    res.status(500).json({ message: "Error fetching course", error });
  }
};

// Function to render specific course details view
exports.getCourseDetailsView = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).send("Course not found");
    res.render("courseDetails", { course }); // Render course details view
  } catch (error) {
    res.status(500).send("Error retrieving course: " + error);
  }
};
