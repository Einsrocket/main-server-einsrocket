const router = require("express").Router();
const { GetAll } = require("../../controllers/Courses/All");

router.get("/all", GetAll);

module.exports = router;
