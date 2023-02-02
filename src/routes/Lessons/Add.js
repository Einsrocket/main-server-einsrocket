const router = require("express").Router();
const { addLesson } = require("../../controllers/Lessons/Add");

router.post("/add", addLesson);

module.exports = router;
