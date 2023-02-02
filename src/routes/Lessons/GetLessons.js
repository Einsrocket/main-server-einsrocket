const router = require("express").Router();
const { GetLessons } = require("../../controllers/Lessons/GetLessons.js");

router.get("/get/:trail", GetLessons);

module.exports = router;