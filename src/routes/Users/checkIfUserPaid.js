const router = require("express").Router();
const { checkIfUserPaid } = require("../../controllers/Users/checkIfUserPaid");

// gets single user
router.get("/did_user_paid/:username", checkIfUserPaid);

module.exports = router;
