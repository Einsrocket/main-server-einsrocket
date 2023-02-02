const router = require("express").Router();
const { AddComment } = require("../../controllers/Lessons/AddComment");

router.post("/add_comment", AddComment);

module.exports = router;
