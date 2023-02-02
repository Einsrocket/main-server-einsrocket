const router = require("express").Router();
const { GetQuizes } = require("../../controllers/Lessons/GetQuizes.js");

router.post("/get_quizes", GetQuizes);

module.exports = router;