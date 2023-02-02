const router = require("express").Router();
const insert_route = require("./Add");
const get_route = require("./GetLessons");
const single_route = require("./Single");
const add_comment_route = require("./AddComment");
const find_comments_route = require("./FindComments");
const add_like_route = require("./AddLike");
const check_like_route = require("./CheckLike");
const get_quizes_route = require("./GetQuizes");
const add_quiz_route = require("./AddQuiz");
const conclude_quiz_route = require("./ConcludeQuiz");

//  lesson routes
router.use(insert_route);
router.use(get_route);
router.use(single_route);
router.use(add_comment_route);
router.use(find_comments_route);
router.use(add_like_route);
router.use(check_like_route);
router.use(get_quizes_route);
router.use(add_quiz_route);
router.use(conclude_quiz_route);

module.exports = router;
