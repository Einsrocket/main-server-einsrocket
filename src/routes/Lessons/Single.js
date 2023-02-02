const router = require("express").Router();
const { GetLesson } = require("../../controllers/Lessons/GetLesson.js");

// gets single lesson
router.get("/lesson/:id", GetLesson);

module.exports = router;