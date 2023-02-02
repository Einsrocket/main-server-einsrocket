const router = require("express").Router();
const { AddQuiz } = require("../../controllers/Lessons/AddQuiz.js");

router.get("/add_quiz", AddQuiz);

module.exports = router;