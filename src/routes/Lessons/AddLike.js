const router = require("express").Router();
const { AddLike } = require("../../controllers/Lessons/AddLike");

router.post("/add_like", AddLike);

module.exports = router;
