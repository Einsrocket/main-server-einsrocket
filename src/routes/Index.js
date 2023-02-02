const router = require("express").Router();
const users_router = require("./Users/Index");
const lesson_router = require("./Lessons/Index");
const courses_router = require("./Courses/Index");

router.use("/users", users_router);
router.use("/courses", courses_router);
router.use("/lessons", lesson_router);
module.exports = router;
