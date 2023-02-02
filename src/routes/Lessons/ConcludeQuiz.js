const router = require("express").Router();
const { ConcludeQuiz } = require("../../controllers/Lessons/ConcludeQuiz.js");

router.post("/conclude_quiz", ConcludeQuiz);

module.exports = router;