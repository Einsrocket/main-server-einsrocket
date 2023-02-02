const router = require("express").Router();
const { passedTutorial } = require("../../controllers/Users/passedTutorial");


router.post("/update_made_tutorial", passedTutorial);

module.exports = router;
