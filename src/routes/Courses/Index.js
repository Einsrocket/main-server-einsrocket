const router = require("express").Router();
const getall_courses_route = require("./All");

//  courses routes
router.use(getall_courses_route);
module.exports = router;
