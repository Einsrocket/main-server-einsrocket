const router = require("express").Router();
const { FindCommentsById } = require("../../controllers/Lessons/FindComments");

router.post("/get_by_id", FindCommentsById);

module.exports = router;
