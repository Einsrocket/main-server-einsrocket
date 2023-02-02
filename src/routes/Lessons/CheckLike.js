const router = require("express").Router();
const { CheckLike } = require("../../controllers/Lessons/CheckLike");

router.post("/check_like", CheckLike);

module.exports = router;
