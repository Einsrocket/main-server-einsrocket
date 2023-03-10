const router = require("express").Router();
const register_route = require("./Register");
const login_route = require("./Login");
const single_user_route = require("./Single");
const getall_user_route = require("./All");
const update_avatar_route = require("./UpdateAvatar");
const update_userinfo_route = require("./UpdateInfo");
const check_if_user_paid_route = require("./checkIfUserPaid");
const update_made_tutorial_route = require("./passedTutorial");
const update_password_route = require("./UpdatePassword");
const verify_activation_code_route = require("./VerifyActivationCode");
const send_activation_code_route = require("./SendActivationCode");

//  user routes
router.use(register_route);
router.use(login_route);
router.use(single_user_route);
router.use(check_if_user_paid_route);
router.use(getall_user_route);
router.use(update_avatar_route);
router.use(update_userinfo_route);
router.use(update_made_tutorial_route);
router.use(verify_activation_code_route);
router.use(update_password_route);
router.use(send_activation_code_route);

module.exports = router;
